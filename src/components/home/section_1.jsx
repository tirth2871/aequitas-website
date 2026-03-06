import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../../assets/hero-bg.png";

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Regulators Covered" },
  { value: "98%", label: "Satisfaction Rate" },
];

const Section1 = () => {
  return (
    <div className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden bg-gray-950">

      {/* Background Image — full color, no grayscale */}
      <img
        alt="Dubai Skyline"
        src={heroBg}
        className="absolute inset-0 -z-20 h-full w-full object-cover pointer-events-none"
      />

      {/* Navy-to-gold gradient overlay — Option 1: Royal Gold Fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,8,15,0.78) 0%, rgba(8,15,29,0.65) 40%, rgba(12,22,51,0.60) 70%, rgba(140,100,20,0.35) 100%)",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Warm gold ambient glow – bottom edge */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-64 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(180,120,20,0.22) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <svg className="h-3 w-3 fill-gold-400" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="6" />
            </svg>
            DFSA Approved - CAMS Certified
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Navigating Compliance{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c9a84c, #f5d88a, #c9a84c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            With Confidence
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-2xl text-lg font-light leading-8 text-gray-400 sm:text-xl"
        >
          Aequitas Management Consultancies delivers expert regulatory compliance, AML/CFT advisory, and Risk
          management solutions from the heart of Dubai.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-semibold text-gray-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400 transition-all duration-300"
          >
            Schedule Consultation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="mt-20 mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
              className="flex flex-col gap-1"
            >
              <dd className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <span
                  style={{
                    background: "linear-gradient(135deg, #f5d88a, #c9a84c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
              </dd>
              <dt className="text-sm font-medium text-gray-400 tracking-wide">{stat.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section1;
