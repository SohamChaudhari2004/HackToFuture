import React, { useState } from 'react';

function ConvertToJPG() {
  const [file, setFile] = useState(null); // Store the selected file
  const [convertedImage, setConvertedImage] = useState(null); // Store the converted image URL

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  // Function to handle the PNG-to-JPG conversion using Canvas
  const convertImageToJPG = async () => {
    if (!file) {
      alert('Please select a PNG file first!');
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas dimensions to image dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Convert canvas to JPG
      canvas.toBlob((blob) => {
        const newFile = new File([blob], "converted-image.jpg", { type: "image/jpeg" });
        const url = URL.createObjectURL(newFile);
        setConvertedImage(url); // Set the converted image URL
        alert('File converted successfully!');
      }, 'image/jpeg');
    };

    img.onerror = (error) => {
      console.error('Error loading image:', error);
      alert('There was an error loading the image.');
    };
  };

  return (
    <div className="App pt-40 pb-40" style={{ textAlign: 'center',  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <h1>PNG to JPG Converter</h1>
        <input type="file" accept=".png" onChange={handleFileChange} /> {/* PNG input */}
        <button onClick={convertImageToJPG} style={{ marginTop: '20px' }}>Convert to JPG</button>
      </div>

      {/* Download button always visible */}
      <div style={{ marginTop: '10px' }}>
        <a href={convertedImage || '#'} download="converted-image.jpg">
          <button style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
            Download Converted Image
          </button>
        </a>
      </div>
    </div>
  );
}

export default ConvertToJPG;
