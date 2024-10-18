import React, { useState } from 'react';
import Dropdown from './Dropdown';
import MobileMenu from './MobileMenu';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-500">I</span>
            <span className="text-black">❤️IMG</span>
          </div>
        </div>

        {/* Middle: Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="#" className="text-gray-700 hover:text-black">COMPRESS IMAGE</a>
          <a href="#" className="text-gray-700 hover:text-black">RESIZE IMAGE</a>
          <a href="#" className="text-gray-700 hover:text-black">CROP IMAGE</a>
          <a href="#" className="text-gray-700 hover:text-black">CONVERT TO JPG</a>
          <a href="#" className="text-gray-700 hover:text-black">PHOTO EDITOR</a>
          <Dropdown dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
        </div>

        {/* Right: Login and Sign Up */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-black">Login</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign up
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />}
    </nav>
  );
};

export default Navbar;
