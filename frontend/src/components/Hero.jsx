import React from "react";
import "../styles/Hero.css";
import profilePic from "../assets/JEEVITHA.png";
import resume from "../assets/resume.pdf";


const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-img">
        <img src={profilePic} alt="Rama Jeevitha" />
      </div>

      <div className="hero-text">
        <h1>RAMA JEEVITHA R</h1>
        <p className="tagline">
          Crafting intuitive designs, coding seamless solutions
        </p>
        <p className="intro">
          A MERN & PERN Stack Developer & UX/UI Designer, building seamless digital
          experiences and innovative web solutions.
        </p>

        <a href={resume} download="Rama_Jeevitha_Resume.pdf" className="resume-btn">
          Download Resume
        </a>

      
      </div>
    </section>
  );
};

export default Hero;
