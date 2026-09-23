import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import WelcomePopup from "./Components/WelcomePopup";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      
      <WelcomePopup />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<services />} />
          <Route path="/contact" element={<contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
