import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const description = `A strong compliance culture starts with well-crafted policies. Our Policy Development service creates bespoke AML/CFT compliance manuals, internal procedures, and control frameworks specifically tailored to your business model, sector, and regulatory obligations under UAE and international law.

We specialise in policy development for gold dealers, jewellery traders, gemstone merchants, and other DNFBPs that require robust AML frameworks aligned with UAE AMLD and FATF recommendations. Every policy we produce is board-ready, regulator-tested, and written for practical daily use.

Our team also provides ongoing policy maintenance, ensuring your compliance documentation remains current as regulations evolve — keeping you always inspection-ready.`;

const PolicyDevelopment = () => (
    <ServicePageTemplate
        title="Policy Development"
        description={description}
        gradient="linear-gradient(135deg, #b7791f 0%, #c9a84c 50%, #f5d88a 100%)"
        posterAccent="linear-gradient(135deg, #f6e05e, #fefcbf)"
    />
);

export default PolicyDevelopment;
