import React, { useState } from 'react';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setDropdownOpen(true)}  // Show dropdown on mouse enter
      onMouseLeave={() => setDropdownOpen(false)} // Hide dropdown when mouse leaves
    >
      <button className="text-gray-700 dark:text-white hover:text-black flex items-center">
        MORE TOOLS
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {dropdownOpen && (
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-300 shadow-lg rounded-lg w-[800px] h-[200px] z-50" // Increased width to 1000px
          onMouseEnter={() => setDropdownOpen(true)} // Keep dropdown open when hovering over the dropdown
          onMouseLeave={() => setDropdownOpen(false)} // Hide dropdown when mouse leaves
          onFocus={() => setDropdownOpen(true)}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center py-8 px-8">
            {/* Optimize Section */}
            <div>
              <h3 className="font-bold text-gray-600 mb-2">OPTIMIZE</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-black">Compress IMAGE</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Upscale</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">Remove background</a></li>
              </ul>
            </div>

            {/* Create Section */}
            <div>
              <h3 className="font-bold text-gray-600 mb-2">CREATE</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-black">Meme generator</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">Photo editor</a></li>
              </ul>
            </div>

            {/* Modify Section */}
            <div>
              <h3 className="font-bold text-gray-600 mb-2">MODIFY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-black">Resize IMAGE</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">Crop IMAGE</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">Rotate IMAGE</a></li>
              </ul>
            </div>

            {/* Convert Section */}
            <div>
              <h3 className="font-bold text-gray-600 mb-2">CONVERT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-black">Convert to JPG</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">Convert from JPG</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">HTML to IMAGE</a></li>
              </ul>
            </div>

            {/* Security Section */}
            <div>
              <h3 className="font-bold text-gray-600 mb-2">SECURITY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-black">Watermark IMAGE</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">Blur face</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
