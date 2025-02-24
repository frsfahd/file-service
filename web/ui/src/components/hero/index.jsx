import React, { useState } from 'react';

const Hero = ({ onChangeHandler, onSubmitHandler, selectedFile, inputKey }) => {
  return (
    <div className="hero bg-base-200 min-h-fit py-6">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This repo gives an example of implementation of gRPC operations (simple, server streaming, and client streaming) through a web-based file service.
            Available features are list files, download, and upload.
          </p>
          <form onSubmit={onSubmitHandler}>
            <div className="join">
              <input
                key={inputKey}
                type="file"
                onChange={onChangeHandler}
                className="join-item file-input file-input-sm file-input-bordered file-input-accent w-full max-w-xs"
              />
              <button className="join-item btn btn-sm btn-outline btn-success">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
