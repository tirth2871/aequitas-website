import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/company_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        background: scrolled
          ? "rgba(90, 60, 8, 0.45)"
          : "rgba(100, 70, 10, 0.22)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,168,76,0.12)"
          : "inset 0 1px 0 rgba(201,168,76,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-1 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center group overflow-visible">
          <img
            src={companyLogo}
            alt="Aequitas UAE Logo"
            className="h-11 md:h-13 w-auto object-contain"
            style={{ transform: "scale(1.5)", transformOrigin: "left center" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-gray-300 text-sm font-medium tracking-wide hover:text-gold-400 transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: CTA + Mobile toggle */}
        <div className="flex items-center space-x-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-gold-400 border border-gold-500 rounded-lg hover:bg-gold-500 hover:text-gray-950 transition-all duration-300"
          >
            Contact Us
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-gold-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="py-3 text-gray-300 font-medium hover:text-gold-400 border-b border-white/5 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 text-center py-3 text-sm font-semibold text-gold-400 border border-gold-500 rounded-lg hover:bg-gold-500 hover:text-gray-950 transition-all duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;