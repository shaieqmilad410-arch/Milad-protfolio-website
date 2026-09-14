import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
