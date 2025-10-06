import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Hackathons.css";

import qcfiImg from "./../assets/qcfi.png";
import w1Img from "./../assets/w1.png";
import w2Img from "./../assets/w2.png";
import tnImg from "./../assets/tn.jpeg";
import virkshaImg from "./../assets/virksha.jpeg";
import msmeImg from "./../assets/msme.jpeg";
import libImg from "./../assets/lib.jpeg";

function Hackathons() {
  // 🎞️ Initialize scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  const hackathons = [
    { img: qcfiImg, caption: "📢 Organizing Quality Circle Week" },
    { img: w1Img, caption: "🎓 Workshop for Polytechnic Students Day 1" },
    { img: w2Img, caption: "🎓 Workshop for Polytechnic Students Day 2" },
    { img: tnImg, caption: "🚀 Attended TNWISE Hackathon 2025 (E-Vehicles)" },
    { img: virkshaImg, caption: "🎓 Workshop for Virksha School (2 Days)" },
    { img: msmeImg, caption: "💡 Presentation at MSME Hackathon 2025" },
    { img: libImg, caption: "📚 Awareness: Poor Utilization of Library" },
  ];

  return (
    <section id="hackathons" data-aos="fade-up">
      <h2 data-aos="zoom-in">Endeavours 🌍</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          {hackathons.map((item, index) => (
            <div className="image-wrapper" data-aos="fade-up" key={index}>
              <img src={item.img} alt={item.caption} />
              <p className="caption">{item.caption}</p>
            </div>
          ))}

          {/* 🔁 Duplicate for infinite scrolling */}
          {hackathons.map((item, index) => (
            <div className="image-wrapper" data-aos="fade-up" key={`dup-${index}`}>
              <img src={item.img} alt={item.caption} />
              <p className="caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hackathons;
