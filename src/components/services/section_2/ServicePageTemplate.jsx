import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * ServicePageTemplate
 * Props:
 *  - title       : string  — service name
 *  - description : string  — body text (dummy for now)
 *  - gradient    : string  — CSS gradient string for hero + poster accent
 *  - posterAccent: string  — secondary gradient for poster card internals
 *  - breadcrumb  : string  — label shown in breadcrumb (defaults to title)
 */
const ServicePageTemplate = ({
    title,
    description,
    gradient,
    posterAccent,
    breadcrumb,
    image,
}) => {
    const crumb = breadcrumb || title;

    return (
        <div className="bg-gray-950 min-h-screen">

            {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
            <div className="relative overflow-hidden" style={{ background: gradient }}>
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                {/* Dark vignette at bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-950/60 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 sm:py-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl drop-shadow-lg"
                    >
                        {title}
                    </motion.h1>

                    {/* Breadcrumb */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.18 }}
                        className="text-sm text-white/65 flex items-center gap-1.5"
                    >
                        <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
                        <span>/</span>
                        <Link to="/services" className="hover:text-white transition-colors duration-200">Services</Link>
                        <span>/</span>
                        <span className="text-white/90">{crumb}</span>
                    </motion.p>
                </div>
            </div>

            {/* ── CONTENT SECTION ─────────────────────────────────────────────── */}
            <section className="relative overflow-hidden py-20 px-6 lg:px-12">
                {/* Ambient glow matching the gradient colour */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 80%)",
                    }}
                />

                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-start">

                    {/* ── LEFT: Title + description ──────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-8">
                            {title}
                        </h2>

                        {/* Decorative line */}
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="h-1 w-14 rounded-full"
                                style={{ background: gradient }}
                            />
                            <div className="h-px flex-1 bg-white/6" />
                        </div>

                        <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                            {description.split("\n\n").map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>

                        {/* Back link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-10"
                        >
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-500/10 px-5 py-2 text-sm font-semibold text-gold-400 hover:bg-gold-500/20 hover:border-gold-400 hover:text-gold-300 transition-all duration-200 group"
                            >
                                <svg
                                    className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform duration-200"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                Back to all services
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Poster card ─────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: 10 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="lg:sticky lg:top-28 self-start"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/8">

                            {/* Poster gradient background */}
                            <div
                                className="absolute inset-0"
                                style={{ background: gradient }}
                            />

                            {/* Decorative geometric shapes */}
                            <div
                                className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full opacity-30"
                                style={{ background: posterAccent }}
                            />
                            <div
                                className="absolute top-0 -left-6 h-32 w-32 rounded-full opacity-20"
                                style={{ background: posterAccent }}
                            />
                            <div
                                className="absolute top-1/2 right-6 h-20 w-20 rotate-45 rounded-md opacity-15"
                                style={{ background: posterAccent }}
                            />

                            {/* Content */}
                            <div className="relative z-10 p-8 min-h-[520px] flex flex-col justify-between">

                                {/* Top row */}
                                <div className="flex items-start justify-between mb-6">
                                    {/* Logo wordmark area */}
                                    <div>
                                        <p className="text-xs font-bold text-white/60 tracking-widest uppercase">Aequitas</p>
                                        <p className="text-xs text-white/40 tracking-wider">Management Consultancies</p>
                                    </div>
                                    {/* Icon badge */}
                                    <div className="h-9 w-9 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Service title */}
                                <div className="flex-grow flex items-center">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow">
                                        {title}
                                    </h3>
                                </div>

                                {/* Bottom: tag + divider */}
                                <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                                        <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                                        UAE Compliance
                                    </span>
                                    <span className="text-white/40 text-xs">aequitas.ae</span>
                                </div>
                            </div>
                        </div>

                        {/* Subtle glow below card */}
                        <div
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 blur-2xl opacity-25 rounded-full pointer-events-none"
                            style={{ background: gradient }}
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicePageTemplate;
