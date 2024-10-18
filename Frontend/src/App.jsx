// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import ImageUpload from './components/ImageUpload'; // Import the new ImageUpload component

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-600 flex items-center justify-center">
        <ImageUpload /> {/* Use the ImageUpload component */}
      </div>
    </>
  );
}

export default App;
