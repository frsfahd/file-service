# File Service

This repo gives an example of implementation of gRPC operations (simple, server streaming, and client streaming) through a web-based file service.

## future dev

- add a Date field to FileMetadata
- handle different mimetype while downloading file (opening tab for PDF/img, and download prompt for others)
- use other server directory for uploading file (currently it saves file to current dir)
- separate config variable (port number, server url) to .env files
