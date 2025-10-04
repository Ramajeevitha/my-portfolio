import React from "react";
import "../styles/Hero.css";


import profilePic from "../assets/JEEVITHA.png";

const Hero = () => {
  return (
    <section id="hero">
      
      <div className="hero-img">
        <img src={profilePic} alt="Rama Jeevitha" />
      </div>

      
      <div className="hero-text">
        <h1>RAMA JEEVITHA R</h1>
        <p className="tagline">Crafting intuitive designs, coding seamless solutions</p>
        <p className="intro">
          A Full Stack Developer & UX/UI Designer, building seamless digital
          experiences and innovative web solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
