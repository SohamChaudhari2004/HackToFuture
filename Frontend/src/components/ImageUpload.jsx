// src/components/ImageUpload.jsx

import React, { useState } from 'react';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpscale = () => {
    if (file) {
      alert('Upscaling in progress...'); // Placeholder for actual upscaling functionality
    } else {
      alert('Please upload an image or video first.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">AI Upscaling Platform</h1>
      <p className="text-gray-600 text-center mb-6">Upload your image or video and enhance its quality using AI.</p>

      <div className="mb-6">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <button
        onClick={handleUpscale}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Upscale Now
      </button>

      {file && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Uploaded File:</h2>
          <p className="text-gray-500">{file.name}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
