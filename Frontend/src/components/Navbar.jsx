import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import MobileMenu from './MobileMenu';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkIcon from '../assets/image.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (state) => {
    setDropdownOpen(state);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white shadow-md p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-500">I</span>
            <span className="text-black dark:text-white">❤️IMG</span>
          </div>
        </div>

        {/* Middle: Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">COMPRESS IMAGE</a>
          <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">RESIZE IMAGE</a>
          <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">CROP IMAGE</a>
          <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">CONVERT TO JPG</a>
          <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">PHOTO EDITOR</a>
          <Dropdown dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown}  />
        </div>

        {/* Right: Login, Sign Up and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <div onClick={toggleDarkMode} className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
            <img className='w-10 h-10' src={DarkIcon} alt="" />
          </div>
          <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">Login</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign up
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
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
