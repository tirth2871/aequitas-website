import React from "react";
import {motion} from "framer-motion";
import teamLogo from '../../assets/pexels-thirdman-7652039.jpg';

const Section3 = () => {
    return (
    <section className="relative bg-white text-white py-20 px-6 lg:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Framed image
        <div className="flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <img
            src="/about-image.jpg"
            alt="Team working"
            className="w-full h-full object-cover"
            />
        </div>
        </div> */}

        {/* Left: Framed image */}
        <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount:0.3 }}
            >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <img
                src={teamLogo}
                alt="Team working"
                className="w-full h-full object-cover"
                />
            </div>
        </motion.div>

        {/* Right: About Us content */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount:0.3 }}
        >
            <h2 className="text-4xl font-bold mb-6 text-black">About Us</h2>
            <p className="text-black mb-20 leading-relaxed">
                We’re a passionate team dedicated to building intelligent and secure embedded systems.
                Our mission is to bridge innovation with real-world applications — creating
                smarter, safer, and more efficient solutions for tomorrow.
            </p>
            <motion.a
                href="#contact"
                className="inline-block rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                Learn More
            </motion.a>
        </motion.div>

    </div>
    </section>
    )
}

export default Section3;