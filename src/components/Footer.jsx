import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import companyLogo from "../assets/company_logo.png";

const services = [
  "MLRO Services",
  "AML/CFT Programs",
  "Regulatory Advisory",
  "Risk Management",
  "KYC/CDD Frameworks",
  "VASP Compliance",
  "DNFBP Consulting",
  "Staff AML Training",
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-white/6">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_2fr_1.2fr] gap-12">

        {/* Left: Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <Link to="/" className="mb-5 inline-block">
            <img
              src={companyLogo}
              alt="Aequitas UAE Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
            Premier AML/CFT compliance consultancy in Dubai, UAE. DFSA approved MLRO services,
            regulatory advisory, and risk management for regulated entities.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-gray-500 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Middle: Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
            Our Services
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
            {services.map((svc) => (
              <a
                key={svc}
                href="/services"
                className="text-sm text-gray-500 hover:text-gold-400 transition-colors duration-200"
              >
                {svc}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-gray-500">
              <svg className="h-4 w-4 flex-shrink-0 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@aequitasuae.com
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <svg className="h-4 w-4 flex-shrink-0 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Dubai, UAE
            </li>
          </ul>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-gold-500/40 px-5 py-2.5 text-sm font-semibold text-gold-400 hover:bg-gold-500 hover:text-gray-950 transition-all duration-300"
          >
            Get in Touch
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 lg:px-16 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Aequitas Management Consultancies LLC. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;