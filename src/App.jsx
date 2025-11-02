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
import Header from "./components/Header";   // your navbar component
import Footer from "./components/Footer";   // your footer component

// Import your pages
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";

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