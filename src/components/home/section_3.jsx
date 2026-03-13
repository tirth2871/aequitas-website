// about equitas section of page

import React from "react";
import { motion } from "framer-motion";
import teamLogo from "../../assets/pexels-thirdman-7652039.jpg";

const differentiators = [
  "DFSA Approved MLRO professionals with deep regulatory knowledge",
  "End-to-end AML/CFT program design and implementation",
  "Tailored compliance frameworks for UAE & international standards",
];

const Section3 = () => {
  return (
    <section className="relative bg-gray-950 overflow-hidden py-24 px-6 lg:px-16">

      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Image with gold accent frame */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            {/* Gold border accent */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold-500/40 via-transparent to-gold-700/20 blur-sm pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20">
              <img
                src={teamLogo}
                alt="Aequitas compliance team"
                className="w-full h-full object-cover max-h-[480px]"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-950/60 to-transparent" />
            </div>

            {/* Floating trust badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 bg-gray-900 border border-gold-500/30 rounded-xl px-4 py-3 shadow-xl shadow-black/40"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Trusted Since 2015</p>
                  <p className="text-xs text-gray-400 mt-0.5">DFSA Certified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: About Us content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-gold-500/30 bg-gold-500/8 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
              About Aequitas
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-5 leading-tight">
            A Team Built on{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f5d88a, #c9a84c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Expertise & Integrity
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8 text-base">
            Aequitas Management Consultancies LLC is a premier compliance firm headquartered in
            Dubai, UAE. We help financial institutions, regulated entities, and businesses navigate
            complex AML/CFT regulations with confidence — combining deep regulatory knowledge with
            practical implementation expertise.
          </p>

          {/* Differentiators */}
          <ul className="space-y-4 mb-10">
            {differentiators.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400 transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;