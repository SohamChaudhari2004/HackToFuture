import React from 'react';
import Dropdown from './Dropdown';

const MobileMenu = ({ toggleDropdown, dropdownOpen }) => {
  return (
    <div className="md:hidden bg-white space-y-4 mt-4">
      <a href="#" className="block text-gray-700 text-center">COMPRESS IMAGE</a>
      <a href="#" className="block text-gray-700 text-center">RESIZE IMAGE</a>
      <a href="#" className="block text-gray-700 text-center">CROP IMAGE</a>
      <a href="#" className="block text-gray-700 text-center">CONVERT TO JPG</a>
      <a href="#" className="block text-gray-700 text-center">PHOTO EDITOR</a>

      {/* Dropdown for Mobile */}
      <Dropdown dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} />

      <a href="#" className="block text-gray-700 text-center">Login</a>
      <button className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Sign up
      </button>
    </div>
  );
};

export default MobileMenu;
