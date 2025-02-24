const express = require('express');

// configure a multer middleware that will handles file upload to memory before sending it to the rpc service
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file-upload');

const fs = require('fs');
const path = require('path');
const { Writable } = require('stream');

const grpc = require('@grpc/grpc-js');

const messages = require('./file_service_pb.js');
const services = require('./file_service_grpc_pb.js');
const { buffer } = require('node:stream/consumers');

const client = new services.FileServiceClient('localhost:9000', grpc.credentials.createInsecure(), {
  'grpc.max_send_message_length': 1024 * 1024 * 200, // 100 MB
  'grpc.max_receive_message_length': 1024 * 1024 * 200, // 100 MB
});

const app = express();
const port = 3000;

// serving the html file
app.use('/', express.static('ui/dist'));

// list files endpoint
app.get('/files', (req, res) => {
  const request = new messages.ListFilterRequest();
  client.list(request, (error, response) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(response.toObject());
  });
});

// upload file endpoint
app.post('/files', (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(500).json({ message: `error while uploading: ${err}` });
      return;
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(500).json({ message: `unknown error: ${err}` });
      return;
    }

    // Everything went fine.
    let filename = `${Date.now()}_${req.file.originalname}`;

    console.log('File size:', req.file.buffer.length);
    console.log('File buffer:', req.file.buffer);

    //stream file to rpc service
    const call = client.upload((err, response) => {
      if (err) {
        console.error('Upload failed:', err);
      } else {
        const resp = response.toObject();
        console.log(resp);
        res.status(200).json({ message: `Uploaded ${resp.file.fileName} with size ${resp.file.size} bytes` });
      }
    });

    const chunkSize = 4096; // 4 KB chunks
    let offset = 0;

    const request = new messages.UploadFileRequest();
    request.setFileName(filename);

    // while (offset < req.file.buffer.length) {
    //   const end = Math.min(offset + chunkSize, req.file.buffer.length); // Ensure we don't exceed the buffer length
    //   // const chunk = req.file.buffer.subarray(offset, offset + chunkSize);
    //   const chunk = req.file.buffer.subarray(offset, end);
    //   request.setChunkData(chunk);

    //   call.write(request, (err) => {
    //     if (err) {
    //       console.error('Failed to send chunk:', err);
    //       return;
    //     }
    //     console.log(`Sending chunk of size ${request.getChunkData().length}`);
    //   });
    //   offset += chunkSize;
    //   // offset = end; // Move the offset to the end of the current chunk
    // }

    // call.end();

    const writableStream = new Writable({
      write(chunk, encoding, callback) {
        request.setChunkData(chunk);
        call.write(request, (err) => {
          if (err) {
            console.error('Failed to send chunk:', err);
            callback(err);
          } else {
            // console.log(`Sent chunk of size ${chunk.length}`);
            callback();
          }
        });
      },
      final(callback) {
        call.end();
        callback();
      },
    });
    while (offset < req.file.buffer.length) {
      const end = Math.min(offset + chunkSize, req.file.buffer.length);
      const chunk = req.file.buffer.subarray(offset, end);
      writableStream.write(chunk);
      offset = end;
    }

    writableStream.end();
  });
});

// download file endpoint
app.get('/files/:filename', (req, res) => {
  const { filename } = req.params;
  const request = new messages.DownloadFileRequest();
  request.setFileName(filename);
  const call = client.download(request);
  const outputfile = path.join(__dirname, 'temp', filename); // Path to the file

  // Ensure temp directory exists
  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
    // Set directory permissions to 755 (rwxr-xr-x)
    fs.chmodSync(tempDir, '755');
  }
  const stream = fs.createWriteStream(outputfile, { mode: 0o644, flags: 'w' });

  call.on('data', (chunk) => {
    // Convert the chunk data to Buffer before writing
    stream.write(Buffer.from(chunk.getChunkData()));
  });

  call.on('end', () => {
    stream.end();
    // Wait for stream to finish before sending file
    stream.on('finish', () => {
      console.log(`downloaded ${filename}`);
      res.sendFile(outputfile, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).send('Could not send file.');
        }
        // Clean up temp file after sending
        fs.unlink(outputfile, (err) => {
          if (err) console.error('Error deleting temp file:', err);
        });
      });
    });
  });

  call.on('error', (err) => {
    console.error(`Download ${filename} as ${outputfile} has failed:`, err.message);
    stream.destroy();
    res.status(500).json({ error: err.message });
    return;
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
