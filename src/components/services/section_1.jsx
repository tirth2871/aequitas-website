// src/pages/Services.jsx
// import React from "react";

// const Services = () => {
//   return (
//     <div className="text-center py-20 text-3xl font-semibold">
//       Services Page
//     </div>
//   );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites and web apps.",
    icon: "🌐",
  },
  {
    title: "AI & Automation",
    description: "Integrating intelligent automation and machine learning solutions.",
    icon: "🤖",
  },
  {
    title: "Embedded Systems",
    description: "Designing and programming efficient embedded control solutions.",
    icon: "⚙️",
  },
  // add more...
];

const Services = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 lg:px-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide cutting-edge solutions that bridge technology and innovation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Ready to start your project?</h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Services;
