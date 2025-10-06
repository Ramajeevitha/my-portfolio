import React from "react";
import "../styles/Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "NPTEL",
      desc: "Design & Implementation of Human-Computer Interfaces",
    },
    {
      title: "Udemy",
      desc: "Logo Design Essentials: Photoshop & Illustrator",
    },
    {
      title: "GUVI",
      desc: "React, Node, GIT, MySQL, MongoDB, HTML & CSS, JavaScript",
    },
    {
      title: "HP",
      desc: "Effective Leadership",
    },
    {
      title: "Infosys",
      desc: "HTML5, JavaScript, and CSS3",
    },
    {
      title: "TCS iON",
      desc: "TCS iON Career Edge- Young Professionals",
    },
    {
      title: "GUVI - UX/UI",
      desc: "Guvi's UX/UI Course",
    },
  ];

  return (
    <section id="certifications">
      <h2>Certifications 📜</h2>
      <h3>
        Explore All{" "}
        <a
          href="https://www.linkedin.com/in/ramajeevitha10"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </h3>

      <div className="certification-container">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
