// source: file_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  return Function('return this')();
}.call(null);

goog.exportSymbol('proto.file_service.DownloadFileRequest', null, global);
goog.exportSymbol('proto.file_service.DownloadFileResponse', null, global);
goog.exportSymbol('proto.file_service.ListFilterRequest', null, global);
goog.exportSymbol('proto.file_service.ListResponse', null, global);
goog.exportSymbol('proto.file_service.UploadFileRequest', null, global);
goog.exportSymbol('proto.file_service.UploadFileResponse', null, global);
goog.exportSymbol('proto.file_service.fileMetadata', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.file_service.fileMetadata = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.file_service.fileMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.file_service.fileMetadata.displayName = 'proto.file_service.fileMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.file_service.UploadFileRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.file_service.UploadFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.file_service.UploadFileRequest.displayName = 'proto.file_service.UploadFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.file_service.UploadFileResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.file_service.UploadFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.file_service.UploadFileResponse.displayName = 'proto.file_service.UploadFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.file_service.DownloadFileRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.file_service.DownloadFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.file_service.DownloadFileRequest.displayName = 'proto.file_service.DownloadFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.file_service.DownloadFileResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.file_service.DownloadFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.file_service.DownloadFileResponse.displayName = 'proto.file_service.DownloadFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.file_service.ListFilterRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.file_service.ListFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.file_service.ListFilterRequest.displayName = 'proto.file_service.ListFilterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.file_service.ListResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.file_service.ListResponse.repeatedFields_, null);
};
goog.inherits(proto.file_service.ListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.file_service.ListResponse.displayName = 'proto.file_service.ListResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_service.fileMetadata.prototype.toObject = function (opt_includeInstance) {
    return proto.file_service.fileMetadata.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_service.fileMetadata} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.file_service.fileMetadata.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        fileName: jspb.Message.getFieldWithDefault(msg, 1, ''),
        size: jspb.Message.getFieldWithDefault(msg, 2, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_service.fileMetadata}
 */
proto.file_service.fileMetadata.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_service.fileMetadata();
  return proto.file_service.fileMetadata.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_service.fileMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_service.fileMetadata}
 */
proto.file_service.fileMetadata.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setFileName(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setSize(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.file_service.fileMetadata.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_service.fileMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_service.fileMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.file_service.fileMetadata.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(2, f);
  }
};

/**
 * optional string file_name = 1;
 * @return {string}
 */
proto.file_service.fileMetadata.prototype.getFileName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.file_service.fileMetadata} returns this
 */
proto.file_service.fileMetadata.prototype.setFileName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.file_service.fileMetadata.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.file_service.fileMetadata} returns this
 */
proto.file_service.fileMetadata.prototype.setSize = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_service.UploadFileRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.file_service.UploadFileRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_service.UploadFileRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.file_service.UploadFileRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        fileName: jspb.Message.getFieldWithDefault(msg, 1, ''),
        chunkData: msg.getChunkData_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_service.UploadFileRequest}
 */
proto.file_service.UploadFileRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_service.UploadFileRequest();
  return proto.file_service.UploadFileRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_service.UploadFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_service.UploadFileRequest}
 */
proto.file_service.UploadFileRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setFileName(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setChunkData(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.file_service.UploadFileRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_service.UploadFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_service.UploadFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.file_service.UploadFileRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getChunkData_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional string file_name = 1;
 * @return {string}
 */
proto.file_service.UploadFileRequest.prototype.getFileName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.file_service.UploadFileRequest} returns this
 */
proto.file_service.UploadFileRequest.prototype.setFileName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional bytes chunk_data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.file_service.UploadFileRequest.prototype.getChunkData = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes chunk_data = 2;
 * This is a type-conversion wrapper around `getChunkData()`
 * @return {string}
 */
proto.file_service.UploadFileRequest.prototype.getChunkData_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunkData()));
};

/**
 * optional bytes chunk_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunkData()`
 * @return {!Uint8Array}
 */
proto.file_service.UploadFileRequest.prototype.getChunkData_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunkData()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.file_service.UploadFileRequest} returns this
 */
proto.file_service.UploadFileRequest.prototype.setChunkData = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_service.UploadFileResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.file_service.UploadFileResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_service.UploadFileResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.file_service.UploadFileResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        file: (f = msg.getFile()) && proto.file_service.fileMetadata.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_service.UploadFileResponse}
 */
proto.file_service.UploadFileResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_service.UploadFileResponse();
  return proto.file_service.UploadFileResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_service.UploadFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_service.UploadFileResponse}
 */
proto.file_service.UploadFileResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.file_service.fileMetadata();
        reader.readMessage(value, proto.file_service.fileMetadata.deserializeBinaryFromReader);
        msg.setFile(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.file_service.UploadFileResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_service.UploadFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_service.UploadFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.file_service.UploadFileResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(1, f, proto.file_service.fileMetadata.serializeBinaryToWriter);
  }
};

/**
 * optional fileMetadata file = 1;
 * @return {?proto.file_service.fileMetadata}
 */
proto.file_service.UploadFileResponse.prototype.getFile = function () {
  return /** @type{?proto.file_service.fileMetadata} */ (jspb.Message.getWrapperField(this, proto.file_service.fileMetadata, 1));
};

/**
 * @param {?proto.file_service.fileMetadata|undefined} value
 * @return {!proto.file_service.UploadFileResponse} returns this
 */
proto.file_service.UploadFileResponse.prototype.setFile = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.file_service.UploadFileResponse} returns this
 */
proto.file_service.UploadFileResponse.prototype.clearFile = function () {
  return this.setFile(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.file_service.UploadFileResponse.prototype.hasFile = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_service.DownloadFileRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.file_service.DownloadFileRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_service.DownloadFileRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.file_service.DownloadFileRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        fileName: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_service.DownloadFileRequest}
 */
proto.file_service.DownloadFileRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_service.DownloadFileRequest();
  return proto.file_service.DownloadFileRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_service.DownloadFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_service.DownloadFileRequest}
 */
proto.file_service.DownloadFileRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setFileName(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.file_service.DownloadFileRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_service.DownloadFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_service.DownloadFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.file_service.DownloadFileRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string file_name = 1;
 * @return {string}
 */
proto.file_service.DownloadFileRequest.prototype.getFileName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.file_service.DownloadFileRequest} returns this
 */
proto.file_service.DownloadFileRequest.prototype.setFileName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_service.DownloadFileResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.file_service.DownloadFileResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_service.DownloadFileResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.file_service.DownloadFileResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        chunkData: msg.getChunkData_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_service.DownloadFileResponse}
 */
proto.file_service.DownloadFileResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_service.DownloadFileResponse();
  return proto.file_service.DownloadFileResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_service.DownloadFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_service.DownloadFileResponse}
 */
proto.file_service.DownloadFileResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setChunkData(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.file_service.DownloadFileResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_service.DownloadFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_service.DownloadFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.file_service.DownloadFileResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getChunkData_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes chunk_data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.file_service.DownloadFileResponse.prototype.getChunkData = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes chunk_data = 1;
 * This is a type-conversion wrapper around `getChunkData()`
 * @return {string}
 */
proto.file_service.DownloadFileResponse.prototype.getChunkData_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunkData()));
};

/**
 * optional bytes chunk_data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunkData()`
 * @return {!Uint8Array}
 */
proto.file_service.DownloadFileResponse.prototype.getChunkData_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunkData()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.file_service.DownloadFileResponse} returns this
 */
proto.file_service.DownloadFileResponse.prototype.setChunkData = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_service.ListFilterRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.file_service.ListFilterRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_service.ListFilterRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.file_service.ListFilterRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_service.ListFilterRequest}
 */
proto.file_service.ListFilterRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_service.ListFilterRequest();
  return proto.file_service.ListFilterRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_service.ListFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_service.ListFilterRequest}
 */
proto.file_service.ListFilterRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.file_service.ListFilterRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_service.ListFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_service.ListFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.file_service.ListFilterRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.file_service.ListResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_service.ListResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.file_service.ListResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_service.ListResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.file_service.ListResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        fileList: jspb.Message.toObjectList(msg.getFileList(), proto.file_service.fileMetadata.toObject, includeInstance),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_service.ListResponse}
 */
proto.file_service.ListResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_service.ListResponse();
  return proto.file_service.ListResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_service.ListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_service.ListResponse}
 */
proto.file_service.ListResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.file_service.fileMetadata();
        reader.readMessage(value, proto.file_service.fileMetadata.deserializeBinaryFromReader);
        msg.addFile(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.file_service.ListResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_service.ListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_service.ListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.file_service.ListResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.file_service.fileMetadata.serializeBinaryToWriter);
  }
};

/**
 * repeated fileMetadata file = 1;
 * @return {!Array<!proto.file_service.fileMetadata>}
 */
proto.file_service.ListResponse.prototype.getFileList = function () {
  return /** @type{!Array<!proto.file_service.fileMetadata>} */ (jspb.Message.getRepeatedWrapperField(this, proto.file_service.fileMetadata, 1));
};

/**
 * @param {!Array<!proto.file_service.fileMetadata>} value
 * @return {!proto.file_service.ListResponse} returns this
 */
proto.file_service.ListResponse.prototype.setFileList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.file_service.fileMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.file_service.fileMetadata}
 */
proto.file_service.ListResponse.prototype.addFile = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.file_service.fileMetadata, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.file_service.ListResponse} returns this
 */
proto.file_service.ListResponse.prototype.clearFileList = function () {
  return this.setFileList([]);
};

goog.object.extend(exports, proto.file_service);

module.exports = exports;
