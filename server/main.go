package main

import (
	"context"
	"io"
	"log"
	"net"
	"os"

	"github.com/frsfahd/file-service/pb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"
)

type server struct {
	pb.UnimplementedFileServiceServer
}

func (s *server) Upload(stream pb.FileService_UploadServer) error {
	var filename string
	var filedata []byte
	for {
		chunk, err := stream.Recv()
		if err == io.EOF {
			//save the file

			err := os.WriteFile(filename, filedata, 0644)
			if err != nil {
				return status.Errorf(codes.Internal, "failed to save file: %v", err)
			}

			return stream.SendAndClose(&pb.UploadFileResponse{
				File: &pb.FileMetadata{FileName: filename, Size: uint32(len(filedata))},
			})
		}
		if err != nil {
			log.Printf("failed to receive chunk: %v", err)
			return status.Errorf(codes.Internal, "failed to receive chunk: %v", err)
		}

		filename = chunk.FileName
		filedata = append(filedata, chunk.ChunkData...)
		log.Printf("Received chunk of size %d\n", uint32(len(filedata)))

	}

}

func (s *server) Download(req *pb.DownloadFileRequest, stream pb.FileService_DownloadServer) error {
	filename := req.FileName
	file, err := os.Open(filename)
	log.Println(filename)
	if err != nil {
		return status.Errorf(codes.Internal, "failed to open file %s : %v", filename, err)
	}
	defer file.Close()

	buffer := make([]byte, 4096)
	for {
		n, err := file.Read(buffer)
		if err == io.EOF {
			break
		}

		if err != nil {
			log.Printf("failed to read file: %v", err)
			status.Errorf(codes.Internal, "failed to read file: %v", err)
		}

		//stream to client
		err = stream.Send(&pb.DownloadFileResponse{ChunkData: buffer[:n]})

		if err != nil {
			log.Printf("failed to send chunk: %v", err)
			status.Errorf(codes.Internal, "failed to send chunk: %v", err)
		}
	}

	return nil
}

func (s *server) List(ctx context.Context, req *pb.ListFilterRequest) (*pb.ListResponse, error) {
	files, err := os.ReadDir(".")
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to read directory: %v", err)
	}

	var response pb.ListResponse
	for _, file := range files {
		if !file.IsDir() {
			info, err := file.Info()
			if err != nil {
				continue
			}

			response.File = append(response.File, &pb.FileMetadata{
				FileName: file.Name(),
				Size:     uint32(info.Size()),
			})
		}
	}

	return &response, nil
}

func main() {
	s, err := net.Listen("tcp", ":9000")
	if err != nil {
		log.Fatalf("failed to listen : %v", err)
	}

	grpcserver := grpc.NewServer(grpc.MaxSendMsgSize(200*1024*1024), // 100 MB
		grpc.MaxRecvMsgSize(200*1024*1024))
	reflection.Register(grpcserver)

	pb.RegisterFileServiceServer(grpcserver, &server{})

	log.Println("server running on port 9000")

	err = grpcserver.Serve(s)
	if err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
