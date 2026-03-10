// import React from 'react' 
// import Header from './components/Header.jsx';
// import Home from './components/Home.jsx';
// import Footer from './components/Footer.jsx';
// import './index.css';

// function App() {

//   return (
//     <>
//     <Header />
//     <Home/>

//     <Footer />  
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import your pages
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";

// Import individual service pages
import AmlCftCompliance from "./components/services/section_2/section_2_1x1";
import RegulatoryAdvisory from "./components/services/section_2/section_2_1x2";
import RiskAssessment from "./components/services/section_2/section_2_1x3";
import ComplianceTraining from "./components/services/section_2/section_2_2x1";
import KycCddAdvisory from "./components/services/section_2/section_2_2x2";
import PolicyDevelopment from "./components/services/section_2/section_2_2x3";

const App = () => {
  return (
    <Router>
      <div className="flex-grow pt-16">
        {/* Navbar always visible */}
        <Header />

        {/* Page content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/aml-cft-compliance" element={<AmlCftCompliance />} />
            <Route path="/services/regulatory-advisory" element={<RegulatoryAdvisory />} />
            <Route path="/services/risk-assessment" element={<RiskAssessment />} />
            <Route path="/services/compliance-training" element={<ComplianceTraining />} />
            <Route path="/services/kyc-cdd-advisory" element={<KycCddAdvisory />} />
            <Route path="/services/policy-development" element={<PolicyDevelopment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;