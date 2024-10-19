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
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-lg w-full mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">AI Upscaling Platform</h1>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6">Upload your image or video and enhance its quality using AI.</p>

      <div className="mb-6 border border-dashed border-gray-400 dark:border-gray-600 border-spacing-4 p-4 rounded-lg">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-gray-700 file:text-blue-700 hover:file:bg-blue-100 dark:hover:file:bg-gray-600"
        />
      </div>

      <button
        onClick={handleUpscale}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Upscale Now
      </button>

      {file && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Uploaded File:</h2>
          <p className="text-gray-500 dark:text-gray-400">{file.name}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
