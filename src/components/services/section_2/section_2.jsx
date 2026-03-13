import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
    {
        title: "Outsourced Compliance & MLRO Services",
        description:
            "We provide outsourced Compliance Officer, MLRO, and Deputy MLRO services. We also help you set up an in-house AML compliance function to handle every aspect of AML/CFT framework.",
        slug: "section_2_1x1",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-3 9 3M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6h18M9 10h6M9 14h6" />
            </svg>
        ),
    },
    {
        title: "Compliance Advisory",
        description:
            "Expert guidance to strengthen your compliance posture through gap assessments, governance advisory, and proactive health checks tailored to your regulatory environment.",
        slug: "section_2_1x2",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2M4.22 4.22l1.415 1.415M18.364 18.364l1.415 1.415M1 12h2m18 0h2M4.22 19.778l1.415-1.415M18.364 5.636l1.415-1.415" />
            </svg>
        ),
    },
    {
        title: "Internal AML/CFT Auditing",
        description:
            "Independent evaluation of your AML/CFT systems, controls, onboarding, monitoring, and reporting processes with comprehensive audit reports.",
        slug: "section_2_1x3",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "External AML/CFT Auditing",
        description:
            "Regulator-required independent AML/CFT audits with formal opinions, governance review, and follow-up audits to ensure corrective actions are implemented.",
        slug: "section_2_2x1",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Training & Capacity Building",
        description:
            "Delivered by industry experts, our training programs cover AML/CFT essentials, advanced MLRO programs, and sector-specific training for DNFBPs and Finance Houses.",
        slug: "section_2_2x2",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
            </svg>
        ),
    },
    {
        title: "Policy Development",
        description:
            "End-to-end AML policy frameworks and compliance manuals for jewellery, gold, gemstone traders, and DNFBPs.",
        slug: "section_2_2x3",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l7 7 7-7M5 21l7-7 7 7M5 12h14" />
            </svg>
        ),
    },
];

const Section2 = () => {
    return (
        <section className="relative bg-gray-900 overflow-hidden py-14 px-6 lg:px-16">

            {/* Decorative top divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            {/* Background glow */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(26,54,101,0.4) 0%, transparent 100%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Section header */}
                <div className="text-center mb-16">


                    <motion.h2
                        className="text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Our{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #f5d88a, #c9a84c)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Services
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto text-base"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Comprehensive compliance and regulatory solutions designed to protect your business
                        and ensure adherence to UAE and international standards.
                    </motion.p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Link
                                to={`/services/${item.slug}`}
                                className="group relative flex flex-col h-full rounded-2xl p-6 border border-white/6 bg-gray-800/40 backdrop-blur-sm hover:border-gold-500/40 hover:bg-gray-800/70 transition-all duration-300 overflow-hidden"
                            >
                                {/* Gold left-border accent on hover */}
                                <div className="absolute left-0 top-0 h-full w-0.5 bg-gold-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

                                {/* Icon */}
                                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700/60 text-gold-400 group-hover:bg-gold-500/15 transition-colors duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                    {item.description}
                                </p>

                                {/* Know More button */}
                                <div className="mt-5 pt-4 border-t border-white/6 flex items-center gap-1.5 text-xs font-semibold text-gold-400 group-hover:text-gold-300 transition-colors duration-200">
                                    Know More
                                    <svg className="h-3.5 w-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative bottom divider */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        </section>
    );
};

export default Section2;
