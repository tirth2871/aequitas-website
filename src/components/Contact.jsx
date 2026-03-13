import React, { useState } from "react";
import { motion } from "framer-motion";

// ── Country dial codes ──────────────────────────────────────────────────────
const countryCodes = [
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+1", country: "US / CA", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
    { code: "+974", country: "Qatar", flag: "🇶🇦" },
    { code: "+973", country: "Bahrain", flag: "🇧🇭" },
    { code: "+968", country: "Oman", flag: "🇴🇲" },
    { code: "+965", country: "Kuwait", flag: "🇰🇼" },
];

// ── Contact info items ──────────────────────────────────────────────────────
const contactInfo = [
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        label: "Office Address",
        value: "Dubai International Financial Centre (DIFC), Dubai, UAE",
    },
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        label: "Email",
        value: "contact@aequitasuae.com",
    },
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: "Business Hours",
        value: "Monday – Friday: 8:00 AM – 5:00 PM GST",
    },
];

// ── Why choose us badges ────────────────────────────────────────────────────
const whyUs = [
    { label: "DFSA Approved" },
    { label: "CAMS Certified" },
    { label: "AML/CFT Expertise" },
    { label: "UAE Regulated" },
];

// ── Initial form state ──────────────────────────────────────────────────────
const initialForm = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    countryCode: "+971",
    mobile: "",
    description: "",
};

// ── Variants ────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
    viewport: { once: true, amount: 0.2 },
});

// ── Gold gradient text style ────────────────────────────────────────────────
const goldText = {
    background: "linear-gradient(90deg, #c9a84c, #f5d88a, #c9a84c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

// ── Helpers ─────────────────────────────────────────────────────────────────
function InputField({ id, label, type = "text", placeholder, value, onChange, required, className = "" }) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            <label htmlFor={id} className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                {label} {required && <span className="text-gold-500">*</span>}
            </label>
            <input
                id={id}
                type={type}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 hover:border-white/20"
                style={{ background: "rgba(255,255,255,0.03)" }}
            />
        </div>
    );
}

// ══════════════════════════════════════════════════════════════════════════════
export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const validate = () => {
        const errs = {};
        if (!form.firstName.trim()) errs.firstName = true;
        if (!form.lastName.trim()) errs.lastName = true;
        if (!form.company.trim()) errs.company = true;
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            errs.email = true;
        if (!form.mobile.trim() || !/^\d{6,15}$/.test(form.mobile.replace(/\s/g, "")))
            errs.mobile = true;
        if (!form.description.trim() || form.description.trim().length < 10)
            errs.description = true;
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            setIsSubmitting(true);

            // Format contact details for backend Email Service
            const payload = {
                firstName: form.firstName,
                lastName: form.lastName,
                company: form.company,
                email: form.email,
                mobile: `${form.countryCode} ${form.mobile}`,
                description: form.description
            };

            fetch("http://localhost:5000/send-emails", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then(data => {
                    setIsSubmitting(false);
                    if (data.success) {
                        setSubmitted(true);
                    } else {
                        alert(data.error || "Failed to send message. Please try again.");
                    }
                })
                .catch(error => {
                    console.error("Error sending message:", error);
                    setIsSubmitting(false);
                    alert("An error occurred while sending your message. Please verify backend is running.");
                });
        }
    };

    return (
        <div className="relative min-h-screen bg-gray-950 overflow-hidden">

            {/* ── Ambient glows ─────────────────────────────────────────── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.10) 0%, transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 inset-x-0 h-96"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 75%)",
                }}
            />

            {/* ── Grid overlay ──────────────────────────────────────────── */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            {/* ── Top gold rule ──────────────────────────────────────────── */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            {/* ════════════════════════════════════════════════════════════
          HERO HEADER
      ════════════════════════════════════════════════════════════ */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16 text-center">

                {/* Badge */}
                <motion.div {...fadeUp(0)} className="mb-6 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-400 uppercase">
                        <svg className="h-3 w-3 fill-gold-400" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="6" />
                        </svg>
                        Aequitas Management Consultancies
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
                >
                    Get in{" "}
                    <span style={goldText}>Touch</span>
                </motion.h1>

                {/* Sub-copy */}
                <motion.p
                    {...fadeUp(0.2)}
                    className="mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed text-gray-400"
                >
                    Whether you need AML/CFT compliance support, regulatory advisory, or a full MLRO framework —
                    our DFSA-approved experts are ready to guide you. Fill in the form and we'll respond within one business day.
                </motion.p>

                {/* Trust badges */}
                <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap justify-center gap-3">
                    {whyUs.map((b, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/8 px-3 py-1 text-xs font-semibold tracking-wide text-gold-400"
                        >
                            <svg className="h-2 w-2 fill-gold-400" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                            {b.label}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* ════════════════════════════════════════════════════════════
          MAIN GRID — Info + Form
      ════════════════════════════════════════════════════════════ */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-28">

                {/* Gold ornament divider */}
                <div className="mb-14 flex items-center justify-center gap-4">
                    <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-gold-500/40 to-transparent" />
                    <svg className="h-4 w-4 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L9.5 9.5H2l6.2 4.5-2.4 7.5L12 17l6.2 4.5-2.4-7.5L22 9.5h-7.5z" />
                    </svg>
                    <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-gold-500/40 to-transparent" />
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

                    {/* ──────────────────────────────────────────────────────
              LEFT PANEL — Contact Info
          ────────────────────────────────────────────────────── */}
                    <motion.aside
                        {...fadeUp(0.1)}
                        className="lg:col-span-2 flex flex-col gap-8"
                    >
                        {/* Info card */}
                        <div
                            className="rounded-2xl p-8 flex flex-col gap-7 border border-white/8"
                            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
                        >
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">Contact Information</h2>
                                <div className="h-px w-12 bg-gold-500 rounded-full" />
                            </div>

                            {contactInfo.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-0.5 flex-shrink-0 text-gold-500">{item.icon}</div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-0.5">{item.label}</p>
                                        <p className="text-sm text-gray-300 leading-relaxed">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* "What to expect" card */}
                        <div
                            className="rounded-2xl p-8 border border-white/8"
                            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
                        >
                            <h3 className="text-base font-bold text-white mb-5">What to Expect</h3>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Response within one business day",
                                    "Confidential, no-obligation consultation",
                                    "Tailored solutions for your regulatory needs",
                                    "Expert guidance from CAMS-certified professionals",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.aside>

                    {/* ──────────────────────────────────────────────────────
              RIGHT PANEL — Contact Form
          ────────────────────────────────────────────────────── */}
                    <motion.div
                        {...fadeUp(0.2)}
                        className="lg:col-span-3"
                    >
                        <div
                            className="rounded-2xl p-8 sm:p-10 border border-white/8"
                            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(14px)" }}
                        >
                            {submitted ? (
                                /* ── Success state ── */
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col items-center text-center gap-6 py-12"
                                >
                                    <div className="flex items-center justify-center h-20 w-20 rounded-full border border-gold-500/30 bg-gold-500/10">
                                        <svg className="h-10 w-10 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400 max-w-sm">
                                            Thank you for reaching out. A member of our team will contact you within one business day.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => { setSubmitted(false); setForm(initialForm); }}
                                        className="mt-2 inline-flex items-center gap-2 rounded-lg border border-gold-500/40 px-6 py-2.5 text-sm font-semibold text-gold-400 hover:bg-gold-500/10 transition-all duration-200"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                /* ── Form ── */
                                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">Send Us a Message</h2>
                                        <div className="h-px w-12 bg-gold-500 rounded-full" />
                                        <p className="mt-3 text-sm text-gray-500">All fields marked with <span className="text-gold-500">*</span> are required.</p>
                                    </div>

                                    {/* Row 1: First & Last Name */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="firstName" className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                                                First Name <span className="text-gold-500">*</span>
                                            </label>
                                            <input
                                                id="firstName"
                                                type="text"
                                                required
                                                placeholder="John"
                                                value={form.firstName}
                                                onChange={handleChange("firstName")}
                                                className={`w-full rounded-lg border px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1 hover:border-white/20 ${errors.firstName
                                                    ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
                                                    : "border-white/10 focus:border-gold-500/60 focus:ring-gold-500/30"
                                                    }`}
                                                style={{ background: "rgba(255,255,255,0.03)" }}
                                            />
                                            {errors.firstName && <p className="text-xs text-red-400 mt-0.5">First name is required.</p>}
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="lastName" className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                                                Last Name <span className="text-gold-500">*</span>
                                            </label>
                                            <input
                                                id="lastName"
                                                type="text"
                                                required
                                                placeholder="Smith"
                                                value={form.lastName}
                                                onChange={handleChange("lastName")}
                                                className={`w-full rounded-lg border px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1 hover:border-white/20 ${errors.lastName
                                                    ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
                                                    : "border-white/10 focus:border-gold-500/60 focus:ring-gold-500/30"
                                                    }`}
                                                style={{ background: "rgba(255,255,255,0.03)" }}
                                            />
                                            {errors.lastName && <p className="text-xs text-red-400 mt-0.5">Last name is required.</p>}
                                        </div>
                                    </div>

                                    {/* Row 2: Company */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="company" className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                                            Company / Organisation <span className="text-gold-500">*</span>
                                        </label>
                                        <input
                                            id="company"
                                            type="text"
                                            required
                                            placeholder="Aequitas Management Consultancies LLC"
                                            value={form.company}
                                            onChange={handleChange("company")}
                                            className={`w-full rounded-lg border px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1 hover:border-white/20 ${errors.company
                                                ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
                                                : "border-white/10 focus:border-gold-500/60 focus:ring-gold-500/30"
                                                }`}
                                            style={{ background: "rgba(255,255,255,0.03)" }}
                                        />
                                        {errors.company && <p className="text-xs text-red-400 mt-0.5">Company name is required.</p>}
                                    </div>

                                    {/* Row 3: Email */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                                            Email Address <span className="text-gold-500">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="john@yourcompany.com"
                                            value={form.email}
                                            onChange={handleChange("email")}
                                            className={`w-full rounded-lg border px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1 hover:border-white/20 ${errors.email
                                                ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
                                                : "border-white/10 focus:border-gold-500/60 focus:ring-gold-500/30"
                                                }`}
                                            style={{ background: "rgba(255,255,255,0.03)" }}
                                        />
                                        {errors.email && <p className="text-xs text-red-400 mt-0.5">A valid email address is required.</p>}
                                    </div>

                                    {/* Row 4: Country Code + Mobile */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="mobile" className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                                            Mobile Number <span className="text-gold-500">*</span>
                                        </label>
                                        <div className="flex gap-3">
                                            {/* Country-code dropdown */}
                                            <div className="flex-shrink-0">
                                                <select
                                                    id="countryCode"
                                                    value={form.countryCode}
                                                    onChange={handleChange("countryCode")}
                                                    className="h-full rounded-lg border border-white/10 bg-transparent px-3 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 hover:border-white/20 cursor-pointer"
                                                    style={{ background: "rgba(255,255,255,0.03)" }}
                                                >
                                                    {countryCodes.map((c) => (
                                                        <option
                                                            key={c.code + c.country}
                                                            value={c.code}
                                                            style={{ background: "#0c1b33", color: "#f0f4f8" }}
                                                        >
                                                            {c.flag} {c.code} ({c.country})
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {/* Mobile field */}
                                            <input
                                                id="mobile"
                                                type="tel"
                                                required
                                                placeholder="50 123 4567"
                                                value={form.mobile}
                                                onChange={handleChange("mobile")}
                                                className={`flex-1 rounded-lg border px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1 hover:border-white/20 ${errors.mobile
                                                    ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
                                                    : "border-white/10 focus:border-gold-500/60 focus:ring-gold-500/30"
                                                    }`}
                                                style={{ background: "rgba(255,255,255,0.03)" }}
                                            />
                                        </div>
                                        {errors.mobile && <p className="text-xs text-red-400 mt-0.5">A valid mobile number is required.</p>}
                                    </div>

                                    {/* Row 5: Description */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="description" className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                                            How Can We Help? <span className="text-gold-500">*</span>
                                        </label>
                                        <textarea
                                            id="description"
                                            required
                                            rows={5}
                                            placeholder="Briefly describe your compliance requirements, the type of regulatory support you need, or any specific questions for our team..."
                                            value={form.description}
                                            onChange={handleChange("description")}
                                            className={`w-full resize-none rounded-lg border px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1 hover:border-white/20 ${errors.description
                                                ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
                                                : "border-white/10 focus:border-gold-500/60 focus:ring-gold-500/30"
                                                }`}
                                            style={{ background: "rgba(255,255,255,0.03)" }}
                                        />
                                        {errors.description && (
                                            <p className="text-xs text-red-400 mt-0.5">Please provide a description (at least 10 characters).</p>
                                        )}
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-8 py-4 text-sm font-bold text-gray-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400 hover:shadow-gold-400/30 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        {!isSubmitting && (
                                            <svg
                                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-gray-600">
                                        By submitting this form you agree to our privacy policy. Your information will never be shared with third parties.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ════════════════════════════════════════════════════════════
          BOTTOM DECORATIVE RULE
      ════════════════════════════════════════════════════════════ */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        </div>
    );
}