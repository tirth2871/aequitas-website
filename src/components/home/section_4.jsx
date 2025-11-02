import React from "react";
import { motion } from "framer-motion";

// Example icons – replace with your own local imports in /assets
import bankIcon from "../../assets/react.svg";
import financeIcon from "../../assets/react.svg";
import insuranceIcon from "../../assets/react.svg";
import auditIcon from "../../assets/react.svg";
import realestateIcon from "../../assets/react.svg";
import metalsIcon from "../../assets/react.svg";
import trustIcon from "../../assets/react.svg";
import legalIcon from "../../assets/react.svg";
import vaspIcon from "../../assets/react.svg";

const services = [
  { title: "Banks", img: bankIcon },
  { title: "Financial Companies", img: financeIcon },
  { title: "Insurance Providers", img: insuranceIcon },
  { title: "Auditors & Accountants", img: auditIcon },
  { title: "Real Estate & Brokers", img: realestateIcon },
  { title: "Dealers in Precious Metals", img: metalsIcon },
  { title: "Trust Service Providers", img: trustIcon },
  { title: "Legal Professionals", img: legalIcon },
  { title: "Virtual Asset Providers", img: vaspIcon },
];

const Section4 = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          We provide comprehensive compliance and consulting solutions for a wide range of industries.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-indigo-500/10 hover:border-indigo-500 transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-6 h-12 w-12 object-contain opacity-90 group-hover:opacity-100 transition duration-300"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive AML solutions tailored to your sector.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;