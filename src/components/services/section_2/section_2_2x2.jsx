import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const description = `Know Your Customer (KYC) and Customer Due Diligence (CDD) are cornerstones of any effective AML/CFT program. Our KYC/CDD Advisory service helps organisations build robust, risk-based processes for customer identification, verification, and ongoing monitoring that satisfy UAE regulatory requirements.

We design comprehensive CDD frameworks covering standard and enhanced due diligence, beneficial ownership identification, and customer risk rating — tailored to your specific sector, whether real estate, retail, financial services, or professional services.

Our advisors have hands-on experience implementing KYC/CDD programs across major UAE sectors, delivering frameworks that are both regulator-ready and operationally practical for your teams.`;

const KycCddAdvisory = () => (
    <ServicePageTemplate
        title="KYC/CDD Advisory"
        description={description}
        gradient="linear-gradient(135deg, #311b92 0%, #4527a0 45%, #7b1fa2 100%)"
        posterAccent="linear-gradient(135deg, #7c4dff, #e040fb)"
    />
);

export default KycCddAdvisory;
