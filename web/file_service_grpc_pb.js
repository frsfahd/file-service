// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_service_pb = require('./file_service_pb.js');

function serialize_file_service_DownloadFileRequest(arg) {
  if (!(arg instanceof file_service_pb.DownloadFileRequest)) {
    throw new Error('Expected argument of type file_service.DownloadFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_DownloadFileRequest(buffer_arg) {
  return file_service_pb.DownloadFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_service_DownloadFileResponse(arg) {
  if (!(arg instanceof file_service_pb.DownloadFileResponse)) {
    throw new Error('Expected argument of type file_service.DownloadFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_DownloadFileResponse(buffer_arg) {
  return file_service_pb.DownloadFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_service_ListFilterRequest(arg) {
  if (!(arg instanceof file_service_pb.ListFilterRequest)) {
    throw new Error('Expected argument of type file_service.ListFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_ListFilterRequest(buffer_arg) {
  return file_service_pb.ListFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_service_ListResponse(arg) {
  if (!(arg instanceof file_service_pb.ListResponse)) {
    throw new Error('Expected argument of type file_service.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_ListResponse(buffer_arg) {
  return file_service_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_service_UploadFileRequest(arg) {
  if (!(arg instanceof file_service_pb.UploadFileRequest)) {
    throw new Error('Expected argument of type file_service.UploadFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_UploadFileRequest(buffer_arg) {
  return file_service_pb.UploadFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_service_UploadFileResponse(arg) {
  if (!(arg instanceof file_service_pb.UploadFileResponse)) {
    throw new Error('Expected argument of type file_service.UploadFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_UploadFileResponse(buffer_arg) {
  return file_service_pb.UploadFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  // Upload a file (client-side streaming)
upload: {
    path: '/file_service.FileService/Upload',
    requestStream: true,
    responseStream: false,
    requestType: file_service_pb.UploadFileRequest,
    responseType: file_service_pb.UploadFileResponse,
    requestSerialize: serialize_file_service_UploadFileRequest,
    requestDeserialize: deserialize_file_service_UploadFileRequest,
    responseSerialize: serialize_file_service_UploadFileResponse,
    responseDeserialize: deserialize_file_service_UploadFileResponse,
  },
  // Download a file (server-side streaming)
download: {
    path: '/file_service.FileService/Download',
    requestStream: false,
    responseStream: true,
    requestType: file_service_pb.DownloadFileRequest,
    responseType: file_service_pb.DownloadFileResponse,
    requestSerialize: serialize_file_service_DownloadFileRequest,
    requestDeserialize: deserialize_file_service_DownloadFileRequest,
    responseSerialize: serialize_file_service_DownloadFileResponse,
    responseDeserialize: deserialize_file_service_DownloadFileResponse,
  },
  // List available files
list: {
    path: '/file_service.FileService/List',
    requestStream: false,
    responseStream: false,
    requestType: file_service_pb.ListFilterRequest,
    responseType: file_service_pb.ListResponse,
    requestSerialize: serialize_file_service_ListFilterRequest,
    requestDeserialize: deserialize_file_service_ListFilterRequest,
    responseSerialize: serialize_file_service_ListResponse,
    responseDeserialize: deserialize_file_service_ListResponse,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService, 'FileService');
