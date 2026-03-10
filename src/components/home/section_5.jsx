// meet our founder section

import React from "react";
import { motion } from "framer-motion";
import founderPhoto from "../../assets/pexels-thirdman-7652039.jpg";

const credentials = [
  {
    label: "CAMS Certified",
    icon: (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "DFSA Approved MLRO",
    icon: (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-3 9 3M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6h18" />
      </svg>
    ),
  },
  {
    label: "20+ Years Experience",
    icon: (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Section5 = () => {
  return (
    <section className="relative bg-gray-950 overflow-hidden py-24 px-6 lg:px-16">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(26,54,101,0.35) 0%, transparent 75%)",
        }}
      />

      {/* Decorative top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-flex items-center gap-2 mb-4 rounded-full border border-gold-500/30 bg-gold-500/8 px-4 py-1.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
              Leadership
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Meet Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f5d88a, #c9a84c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Founder
            </span>
          </motion.h2>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-center bg-gray-900/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Gold glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold-500/30 via-transparent to-gold-700/15 blur-sm pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-black/40 w-full max-w-[280px] md:max-w-full aspect-[3/4]">
                <img
                  src={founderPhoto}
                  alt="Founder"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Name */}
            <h3 className="text-3xl font-bold text-white mb-1">
              Mr. Thomas
            </h3>

            {/* Title */}
            <p
              className="text-base font-medium mb-6"
              style={{
                background: "linear-gradient(90deg, #c9a84c, #f5d88a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Founding Partner &amp; DFSA Approved MLRO
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {credentials.map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/8 px-3 py-1.5 text-xs font-semibold text-gold-400"
                >
                  {c.icon}
                  {c.label}
                </span>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed mb-8">
              <p>
                With over three decades of distinguished experience in Operations and Compliance,
                Mr. Thomas leads our team with unparalleled expertise and industry insight. As a
                DFSA (Dubai Financial Services Authority) approved Money Laundering Reporting
                Officer (MLRO), he brings specialised regulatory credentials and deep understanding
                of UAE compliance requirements.
              </p>
              <p>
                His extensive track record encompasses regulatory compliance, risk management, and
                operational excellence across diverse sectors. Supported by a highly experienced
                think tank of compliance professionals, Aequitas delivers solutions that combine
                technical precision with practical business acumen.
              </p>
            </div>

            {/* Closing statement */}
            <p className="text-sm font-semibold text-white leading-relaxed border-l-2 border-gold-500 pl-4">
              Under his leadership, Aequitas ensures your organisation remains compliant,
              competitive, and confident in today's complex regulatory environment.
            </p>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default Section5;
