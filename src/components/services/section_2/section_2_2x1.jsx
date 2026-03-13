import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const description = `A well-trained workforce is your first line of defence against financial crime. Our Compliance Training programs equip teams at every level — from frontline staff to board members — with the knowledge and practical skills to recognise, prevent, and report money laundering and terrorism financing.

Our training is delivered by active compliance practitioners with firsthand regulatory experience, making every session grounded in real UAE cases and current FATF typologies. Programs are available in person or virtually and can be customised to your sector and regulatory obligations.

Upon completion, participants receive certification and training records to demonstrate compliance with UAE AML/CFT training requirements to regulators.`;

const ComplianceTraining = () => (
    <ServicePageTemplate
        title="Compliance Training"
        description={description}
        gradient="linear-gradient(135deg, #1b5e20 0%, #2e7d32 45%, #43a047 100%)"
        posterAccent="linear-gradient(135deg, #66bb6a, #a5d6a7)"
    />
);

export default ComplianceTraining;
