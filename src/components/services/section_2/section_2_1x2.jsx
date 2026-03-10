import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const description = `Navigating the ever-evolving UAE and GCC regulatory landscape can be challenging for payment firms, fintechs, and financial institutions. Our Regulatory Advisory service translates complex regulatory requirements into clear, actionable compliance frameworks so your business can operate with confidence.

We provide expert guidance across CBUAE, DFSA, and FSRA regulatory regimes — covering everything from initial gap analysis and licensing support to ongoing regulatory change management. Our team ensures your frameworks remain aligned with the latest regulatory updates.

Whether you are a fintech seeking authorisation, a payment services firm managing compliance obligations, or an established institution navigating regulatory change, we provide the strategic advisory you need.`;

const RegulatoryAdvisory = () => (
    <ServicePageTemplate
        title="Regulatory Advisory"
        description={description}
        gradient="linear-gradient(135deg, #0077b6 0%, #0096c7 45%, #00b4d8 100%)"
        posterAccent="linear-gradient(135deg, #48cae4, #90e0ef)"
    />
);

export default RegulatoryAdvisory;
