import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const upcomingServices = [
  "AML/CFT Compliance Programs",
  "DFSA Approved MLRO Services",
  "Regulatory Advisory",
  "Risk Assessment & Management",
  "KYC/CDD Frameworks",
  "Compliance Training",
  "Policy Development",
  "Compliance Audits",
  "Virtual Asset (VASP) Compliance",
];

const ServicesSection1 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,168,76,0.10) 0%, rgba(26,54,101,0.25) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-32 text-center">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
            </span>
            Coming Soon
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Our Services Page is{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c9a84c, #f5d88a, #c9a84c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Under Construction
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          We are working hard to bring you a detailed overview of our full suite of
          AML/CFT compliance and regulatory advisory services. In the meantime, please
          reach out to us directly — we would love to help.
        </motion.p>

        {/* Upcoming service tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 mb-14"
        >
          {upcomingServices.map((svc, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-xs font-medium text-gray-400"
            >
              <span className="h-1 w-1 rounded-full bg-gold-500 flex-shrink-0" />
              {svc}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-gold-500/40 to-transparent" />
          <svg className="h-3 w-3 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L9.5 9.5H2l6.2 4.5-2.4 7.5L12 17l6.2 4.5-2.4-7.5L22 9.5h-7.5z" />
          </svg>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-gold-500/40 to-transparent" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-semibold text-gray-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400 transition-all duration-300"
          >
            Contact Us Now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection1;
