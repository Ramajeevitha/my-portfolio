import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Achievements.css";

// Import assets
import woodImg from "./../assets/wood.jpeg";
import goldImg from "./../assets/gold.jpeg";
import besttImg from "./../assets/bestt.jpeg";
import tcsImg from "./../assets/tcs.jpeg";
import sooriImg from "./../assets/soori.jpeg";
import bestImg from "./../assets/best.jpeg";
import danceImg from "./../assets/dance.jpeg";
import konguImg from "./../assets/kongu.png";
import journalImg from "./../assets/journal.png";

function Achievements() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  const achievements = [
    { img: woodImg, text: "🔧 Two Wood Router Projects - AICTE Idea Lab" },
    { img: besttImg, text: "🏆 Best Achiever Award 2022-2025" },
    { img: goldImg, text: "🏆 Gold Award - QCFI Chennai Chapter 2024" },
    { img: tcsImg, text: "🏅 Scored Good Marks in TCS NQT 2025" },
    { img: sooriImg, text: "✨ Created a memento for Actor Soori" },
    { img: bestImg, text: "🏅 Best Presentation Award - Symposium" },
    { img: danceImg, text: "🏅 Secured 2nd Prize Tri-Fest 2025 (Dance)" },
    { img: konguImg, text: "🥇 First Prize - National Level Technical Symposium" },
    {
      img: journalImg,
      text: "📜 1 Journal Published",
      link: "https://www.ijert.org/detection-of-cyber-bullying-on-youtube-using-machine-learning",
    },
  ];

  return (
    <section id="achievements">
      <h2>Achievements 🏆</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          {achievements.concat(achievements).map((item, index) => (
            <div
              className="image-wrapper"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.img} alt={item.text} />
                  <div className="caption">{item.text}</div>
                </a>
              ) : (
                <>
                  <img src={item.img} alt={item.text} />
                  <div className="caption">{item.text}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
