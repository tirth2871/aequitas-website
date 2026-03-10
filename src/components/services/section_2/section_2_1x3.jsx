import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const description = `An effective risk assessment is the foundation of any robust AML/CFT compliance program. Our Risk Assessment service delivers enterprise-wide evaluations that identify, measure, and prioritise your organisation's exposure to financial crime risks — enabling proportionate and effective controls.

We follow FATF-aligned methodology combined with deep knowledge of UAE regulatory expectations. Our assessments cover inherent and residual risk across customers, products, channels, and geographies — resulting in a clear, actionable risk picture for management and regulators.

From initial risk scoring model development to periodic review frameworks, we support your organisation throughout the entire risk assessment lifecycle.`;

const RiskAssessment = () => (
    <ServicePageTemplate
        title="Risk Assessment"
        description={description}
        gradient="linear-gradient(135deg, #e64a19 0%, #f57c00 50%, #ffa726 100%)"
        posterAccent="linear-gradient(135deg, #ff8a65, #ffcc80)"
    />
);

export default RiskAssessment;
