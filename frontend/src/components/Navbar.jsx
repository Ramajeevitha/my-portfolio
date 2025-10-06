import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        {}
        <a href="#home" className="logo" role="banner" aria-label="Logo of Rama Jeevitha">
          <img 
            src={logo} 
            alt="Logo of Rama Jeevitha" 
            className="logo-img" 
          />
          <span className="logo-text">My Portfolio</span>
        </a>

        
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        
        <ul className={`nav-links ${isOpen ? "open" : ""}`} role="navigation" aria-label="Main navigation">
          <li><a href="#about" aria-label="About Me">About</a></li>
          <li><a href="#projects" aria-label="Projects">Projects</a></li>
          <li><a href="#experience" aria-label="Experience">Experience</a></li>
          <li><a href="#achievements" aria-label="Achievements">Achievements</a></li>
          <li><a href="#hackathons" aria-label="Hackathons">Endeavours</a></li>
          <li><a href="#certifications" aria-label="Certifications">Certifications</a></li>
          <li><a href="#contact" aria-label="Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
