// import React from 'react'

// const Header = () => {
//   return (
//     <div className='bg-white text-blue'>Header 1</div>
//   )
// }

// export default Header;

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-black">
          AEQUITAS UAE
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">Contact</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-3 py-3 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
