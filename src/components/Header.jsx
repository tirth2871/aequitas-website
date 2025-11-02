// import React from 'react'

// const Header = () => {
//   return (
//     <div className='bg-white text-blue'>Header 1</div>
//   )
// }

// export default Header;

// import React, { useState } from 'react';
// import logo from '../assets/react.svg';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md w-full">
//       <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
//         {/* Left: Logo + Brand */}
//         <div className="flex items-center">
//           <img src={logo} alt="Aequitas logo" className="h-8 w-8 mr-3" />
//           <h1 className="text-2xl font-bold text-black">AEQUITAS UAE</h1>
//         </div>

//         {/* Center: Desktop Menu (centered) */}
//         <nav className="hidden md:flex justify-center space-x-8 text-gray-700 font-medium">
//           <a href="#home" className="hover:text-blue-600">Home</a>
//           <a href="#services" className="hover:text-blue-600">Services</a>
//           <a href="#contact" className="hover:text-blue-600">Contact</a>
//         </nav>

//         {/* Right: CTA (desktop) and Mobile Menu Button (mobile) */}
//         <div className="flex items-center justify-end space-x-4">
//           {/* CTA - hidden on small screens */}
//           <a href="#contact" className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">CONTACT US</a>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-700 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               // Close Icon (X)
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               // Hamburger Icon
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <nav className="flex flex-col items-center space-y-3 py-3 text-gray-700 font-medium">
//             <a href="#home" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
//             <a href="#services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</a>
//             <a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
//             <a href="#contact" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={() => setIsOpen(false)}>Get a Quote</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // ✅ import Link
// import logo from "../assets/react.svg";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
//         {/* Left: Logo + Brand */}
//         <div className="flex items-center">
//           <img src={logo} alt="Aequitas logo" className="h-8 w-8 mr-3" />
//           <h1 className="text-2xl font-bold text-black">AEQUITAS UAE</h1>
//         </div>

//         {/* Center: Desktop Menu (centered) */}
//         <nav className="hidden md:flex justify-center space-x-8 text-gray-700 font-medium">
//           <Link to="/" className="hover:text-blue-600">
//             Home
//           </Link>
//           <Link to="/services" className="hover:text-blue-600">
//             Services
//           </Link>
//           <Link to="/contact" className="hover:text-blue-600">
//             Contact
//           </Link>
//         </nav>

//         {/* Right: CTA (desktop) and Mobile Menu Button (mobile) */}
//         <div className="flex items-center justify-end space-x-4">
//           {/* CTA - hidden on small screens */}
//           <Link
//             to="/contact"
//             className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//           >
//             CONTACT US
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-700 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               // Close Icon (X)
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               // Hamburger Icon
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <nav className="flex flex-col items-center space-y-3 py-3 text-gray-700 font-medium">
//             <Link
//               to="/"
//               className="hover:text-blue-600"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/services"
//               className="hover:text-blue-600"
//               onClick={() => setIsOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:text-blue-600"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/contact"
//               className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//               onClick={() => setIsOpen(false)}
//             >
//               Get a Quote
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for background transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div
        className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between"
      >
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-2 min-w-0">
          <img src={logo} alt="Aequitas logo" className="h-7 w-7 md:h-8 md:w-8" />
          <h1
            className="text-lg md:text-2xl font-bold text-black whitespace-nowrap truncate"
          >
            AEQUITAS UAE
          </h1>
        </div>

        {/* Center: Desktop Menu */}
        <nav className="hidden md:flex justify-center space-x-8 text-gray-800 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Right: CTA + Mobile Menu Button */}
        <div className="flex items-center justify-end space-x-4 flex-shrink-0">
          <Link
            to="/contact"
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            CONTACT US
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>


      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md">
          <nav className="flex flex-col items-center space-y-3 py-3 text-gray-700 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;