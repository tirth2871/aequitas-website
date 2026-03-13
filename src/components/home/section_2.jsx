// ready to build a compliant future section of home page

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const trustBadges = [
  { label: "DFSA Approved" },
  { label: "AML/CFT Experts" },
  { label: "UAE Regulated" },
];

const Section2 = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 px-6 lg:px-8">

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 80%)",
        }}
      />

      {/* Gold grid lines top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {trustBadges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/8 px-3 py-1 text-xs font-semibold tracking-wide text-gold-400"
            >
              <svg className="h-2 w-2 fill-gold-400" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
              {badge.label}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Ready to Build a{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c9a84c, #f5d88a, #c9a84c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Compliant Future?
          </span>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Partner with Aequitas — DFSA approved MLRO specialists delivering robust regulatory
          frameworks, risk assessments, and peace of mind for businesses across Dubai, UAE and beyond.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-8 py-4 text-sm font-bold text-gray-950 shadow-lg shadow-gold-500/25 hover:bg-gold-400 hover:shadow-gold-400/30 transition-all duration-300"
          >
            Contact Us Now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;