import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Assessment",
        subtitle: "Understand Your Risk Landscape",
        description:
            "We conduct a thorough analysis of your current compliance posture, regulatory obligations, and operational risks — identifying gaps, vulnerabilities, and areas requiring immediate attention.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Strategy",
        subtitle: "Design Your Compliance Roadmap",
        description:
            "Based on findings, we develop a tailored AML/CFT compliance roadmap aligned with UAE regulatory standards, your business model, and international best practices.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Implementation",
        subtitle: "Deploy Controls & Frameworks",
        description:
            "Our team works alongside yours to deploy policies, procedures, transaction monitoring controls, KYC/CDD frameworks, and governance structures that meet regulatory expectations.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Monitoring",
        subtitle: "Ongoing Oversight & Assurance",
        description:
            "Compliance is never static. We provide continuous oversight, real-time regulatory reporting, staff training, and periodic reviews to keep your organisation ahead of evolving requirements.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

const Section6 = () => {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="relative bg-gray-950 overflow-hidden py-24 px-6 lg:px-16">

            {/* Background grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            {/* Top gold divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            {/* Radial glow */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="inline-flex items-center gap-2 mb-5 rounded-full border border-gold-500/30 bg-gold-500/8 px-4 py-1.5"
                    >
                        <div className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                        <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
                            Our Process
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        How We Work{" "}
                        <span
                            style={{
                                background: "linear-gradient(90deg, #c9a84c, #f5d88a, #c9a84c)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            With You
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 max-w-xl mx-auto text-base"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        A proven four-step approach that transforms compliance from a burden
                        into a strategic advantage.
                    </motion.p>
                </div>

                {/* Connector + Steps */}
                <div className="relative">


                    {/* Connector row — same grid as cards so dots center over each card */}
                    <div className="hidden lg:block relative mb-4">
                        {/* Line from center-of-col-1 to center-of-col-4 */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-px overflow-hidden">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="h-full origin-left"
                                style={{
                                    background: "linear-gradient(90deg, rgba(201,168,76,0.5), rgba(245,216,138,0.75) 50%, rgba(201,168,76,0.5))",
                                }}
                            />
                        </div>
                        {/* Dots grid — same columns+gap as cards below */}
                        <div className="grid grid-cols-4 gap-4">
                            {steps.map((_, index) => (
                                <div key={index} className="flex justify-center items-center h-5">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        className="h-4 w-4 rounded-full border-2 flex-shrink-0 transition-all duration-300"
                                        style={{
                                            background: activeStep === index ? "#c9a84c" : "#111827",
                                            borderColor: activeStep === index ? "#f5d88a" : "rgba(201,168,76,0.45)",
                                            boxShadow: activeStep === index ? "0 0 14px rgba(245,216,138,0.65)" : "none",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Steps grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.12 }}
                                viewport={{ once: false, amount: 0.3 }}
                                onHoverStart={() => setActiveStep(index)}
                                onHoverEnd={() => setActiveStep(null)}
                                className="group relative flex flex-col"
                            >
                                {/* Card */}
                                <div
                                    className="relative flex-1 rounded-2xl p-6 pt-8 overflow-hidden transition-all duration-400 cursor-default"
                                    style={{
                                        background:
                                            activeStep === index
                                                ? "rgba(245,216,138,0.05)"
                                                : "rgba(255,255,255,0.025)",
                                        border: `1px solid ${activeStep === index ? "rgba(245,216,138,0.28)" : "rgba(255,255,255,0.06)"}`,
                                        transition: "background 0.35s ease, border 0.35s ease",
                                    }}
                                >

                                    {/* Giant background number */}
                                    <span
                                        className="absolute -top-3 -right-1 text-[7rem] font-black leading-none select-none pointer-events-none transition-all duration-400"
                                        style={{
                                            color: activeStep === index
                                                ? "rgba(201,168,76,0.22)"
                                                : "rgba(255,255,255,0.10)",
                                        }}
                                    >
                                        {step.number}
                                    </span>

                                    {/* Icon dot + number badge */}
                                    <div className="relative z-10 mb-5 flex items-center gap-3">
                                        <div
                                            className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300"
                                            style={{
                                                background: activeStep === index
                                                    ? "rgba(201,168,76,0.2)"
                                                    : "rgba(255,255,255,0.05)",
                                                color: activeStep === index ? "#c9a84c" : "#9ca3af",
                                                border: `1px solid ${activeStep === index ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.06)"}`,
                                            }}
                                        >
                                            {step.icon}
                                        </div>

                                        {/* Step number pill */}
                                        <span
                                            className="text-xs font-bold tracking-widest px-2 py-1 rounded-full transition-all duration-300"
                                            style={{
                                                color: activeStep === index ? "#c9a84c" : "#6b7280",
                                                background: activeStep === index
                                                    ? "rgba(201,168,76,0.10)"
                                                    : "rgba(255,255,255,0.04)",
                                                border: `1px solid ${activeStep === index ? "rgba(201,168,76,0.25)" : "rgba(255,255,255,0.05)"}`,
                                            }}
                                        >
                                            Step {step.number}
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div className="relative z-10">
                                        <h3
                                            className="text-xl font-bold mb-1 transition-colors duration-300"
                                            style={{ color: activeStep === index ? "#f5d88a" : "#ffffff" }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className="text-xs font-semibold text-gold-500/70 mb-3 uppercase tracking-wider">
                                            {step.subtitle}
                                        </p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Gold bottom fill bar */}
                                    <div
                                        className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                                        style={{
                                            width: activeStep === index ? "100%" : "0%",
                                            background: "linear-gradient(90deg, #c9a84c, #f5d88a)",
                                        }}
                                    />
                                </div>
                                {/* Mobile vertical connector */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-3">
                                        <div className="w-px h-8 bg-gradient-to-b from-gold-500/40 to-transparent" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
