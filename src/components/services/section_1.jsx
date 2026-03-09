import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-36 pb-20 px-6 lg:px-8">

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Soft radial glow centered */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.09) 0%, rgba(26,54,101,0.2) 55%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <svg className="h-2.5 w-2.5 fill-gold-400" viewBox="0 0 10 10">
              <circle cx="5" cy="5" r="5" />
            </svg>
            What We Offer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          <span
            style={{
              background: "linear-gradient(90deg, #c9a84c, #f5d88a, #c9a84c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            End-to-End AML/CFT &amp; Compliance Solutions
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-2xl sm:text-3xl font-bold text-gray-300 tracking-wide"
        >
          Built for Your Business
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          From outsourced compliance officers to independent auditing and training, we deliver comprehensive solutions tailored to UAE and GCC regulatory requirements.
        </motion.p>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-gold-500/40 to-transparent" />
          <svg className="h-3 w-3 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L9.5 9.5H2l6.2 4.5-2.4 7.5L12 17l6.2 4.5-2.4-7.5L22 9.5h-7.5z" />
          </svg>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-gold-500/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
