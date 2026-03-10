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

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Scrolls to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import your pages
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";

// Import individual service pages
import MLROServices from "./components/services/section_2/section_2_1x1";
import ComplianceAdvisory from "./components/services/section_2/section_2_1x2";
import InternalAuditing from "./components/services/section_2/section_2_1x3";
import ExternalAuditing from "./components/services/section_2/section_2_2x1";
import Training from "./components/services/section_2/section_2_2x2";
import PolicyDevelopment from "./components/services/section_2/section_2_2x3";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex-grow pt-16">
        {/* Navbar always visible */}
        <Header />

        {/* Page content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/section_2_1x1" element={<MLROServices />} />
            <Route path="/services/section_2_1x2" element={<ComplianceAdvisory />} />
            <Route path="/services/section_2_1x3" element={<InternalAuditing />} />
            <Route path="/services/section_2_2x1" element={<ExternalAuditing />} />
            <Route path="/services/section_2_2x2" element={<Training />} />
            <Route path="/services/section_2_2x3" element={<PolicyDevelopment />} />
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