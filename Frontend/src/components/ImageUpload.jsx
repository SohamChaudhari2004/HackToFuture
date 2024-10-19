import React, { useState } from 'react';

const ImageUpscaleComponent = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(''); // To hold the selected image name for display

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setFileName(uploadedFile.name);
  };

  const handleImageClick = (imageUrl, imageName) => {
    // Set the selected image as the file
    const imageFile = new File([imageUrl], imageName, { type: "image/png" });
    setFile(imageFile);
    setFileName(imageName); // Update the displayed file name
  };

  const handleUpscale = () => {
    if (file) {
      alert(`Upscaling ${fileName} in progress...`); // Placeholder for actual upscaling functionality
    } else {
      alert('Please upload an image or select one first.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side (Jacket Video) */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-6 md:mb-0">
          <video
            src="/upscaler.mp4" // Add the jacket video here
            autoPlay
            loop
            muted
            className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side (Image Upload Section) */}
        <div className="md:w-1/2 w-full bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Upscale image quality with AI free online</h1>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            AI image upscaler will enhance your photo in seconds. Increase image quality to 4K with our free online tool!
          </p>

          {/* Upload Box */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center">
            {/* Image/Video Upload Input */}
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <button
              onClick={handleUpscale}
              className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Upscale image
            </button>
            <p className="text-gray-500 mt-4">or drop photos here</p>
          </div>

          {fileName && (
            <div className="mt-6 text-center">
              <h2 className="text-lg font-semibold text-gray-700">Selected File:</h2>
              <p className="text-gray-500">{fileName}</p>
            </div>
          )}

          <p className="text-xs text-gray-400 mt-4">
            By uploading an image you agree to our Terms and Privacy Policy
          </p>

          {/* Bottom placeholder for optional images */}
          <div className="flex mt-4 space-x-2 justify-center md:justify-start w-10 h-10">
            <img
              src="/imgtry1.png"
              alt="placeholder"
              className="rounded-full cursor-pointer"
              onClick={() => handleImageClick('/imgtry1.png', 'imgtry1.png')} // Handle click for selection
            />
            <img
              src="/imgtry1.png"
              alt="placeholder"
              className="rounded-full cursor-pointer"
              onClick={() => handleImageClick('/imgtry1.png', 'imgtry2.png')} // Handle click for selection
            />
            <img
              src="/git1.jpg"
              alt="placeholder"
              className="rounded-full cursor-pointer"
              onClick={() => handleImageClick('/git1.jpg', 'imgtry3.png')} // Handle click for selection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpscaleComponent;
