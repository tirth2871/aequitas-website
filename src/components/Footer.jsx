import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/react.svg"; // replace with your actual logo
import mailIcon from "../assets/react.svg"; // replace with your mail icon
import fbIcon from "../assets/react.svg";     // placeholder social icons
import igIcon from "../assets/react.svg";
import liIcon from "../assets/react.svg";
import twIcon from "../assets/react.svg";
import ytIcon from "../assets/react.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 lg:px-16 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1fr] gap-10">
        
        {/* --- Left: Logo + Tagline --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <img src={logo} alt="Logo" className="w-24 mb-4" />
          <p className="text-sm text-gray-600 max-w-xs">
            Empowering innovation through intelligent control and smart systems.
          </p>
        </motion.div>

        {/* --- Middle: Services List (now wider) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700">
            <ul className="space-y-2">
              <li>Embedded Systems</li>
              <li>Control Systems</li>
              <li>AI-Based Automation</li>
              <li>Firmware Development</li>
              <li>IoT Solutions</li>
            </ul>
            <ul className="space-y-2">
              <li>System Simulation</li>
              <li>Machine Learning</li>
              <li>Smart Robotics</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </motion.div>

        {/* --- Right: Contact Info (shifted right, narrower) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="flex items-center mb-4">
            <img src={mailIcon} alt="Mail" className="w-5 h-5 mr-2" />
            <p className="text-sm text-gray-700">contact@aequitas.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            {[fbIcon, igIcon, liIcon, twIcon, ytIcon].map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt="Social"
                className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity duration-200"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- Bottom small text --- */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Aequitas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;