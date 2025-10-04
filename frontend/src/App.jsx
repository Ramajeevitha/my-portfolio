import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Hackathons from "./components/Hackathons";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import bgImage from "./assets/neww.avif";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Hackathons />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
