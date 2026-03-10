import React from "react";

import ServicePageTemplate from "./ServicePageTemplate";

const description = `As the UAE market is witnessing a string of rules and regulations related to AML and CFT, organisations are gearing up to adopt ways to comply with these laws. Economies across the world make it mandatory for businesses that have higher possibilities of facing money laundering and terrorism funding issues to implement AML/CFT frameworks.

Another thing that is necessary but most organisations ignore is the creation of an in-house AML compliance department and the appointment of a person responsible for achieving AML compliance. We help UAE businesses when it comes to AML/CFT compliance and help them comply with UAE AML regulations.

Our team of DFSA-approved MLROs and compliance specialists design end-to-end AML/CFT programs — from transaction monitoring and suspicious activity reporting, to customer risk profiling and regulatory liaison with CBUAE, DFSA, and FSRA.`;

const Section_2_1x1 = () => (
    <ServicePageTemplate
        title="AML/CFT Compliance"
        description={description}
        gradient="linear-gradient(135deg, #e91e8c 0%, #9c27b0 50%, #5c35d4 100%)"
        posterAccent="linear-gradient(135deg, #f06292, #ce93d8)"
    />
);

export default Section_2_1x1;
