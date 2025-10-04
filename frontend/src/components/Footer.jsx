import React from "react";
import "../styles/Footer.css";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 <strong>RAMA JEEVITHA R</strong>. All rights reserved.</p>
        <p>Designed by Rama Jeevitha</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ramajeevitha10" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Ramajeevitha" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
