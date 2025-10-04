import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo" role="banner" aria-label="Logo of Rama Jeevitha">
          RAMA JEEVITHA R
        </div>
        <ul role="navigation" aria-label="Main navigation">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
