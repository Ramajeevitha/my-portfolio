import React from "react";
import "../styles/Achievements.css";

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
  const achievements = [
    { img: woodImg, caption: "🔧 Two Wood Router Projects - AICTE Idea Lab" },
    { img: besttImg, caption: "🏆 Best Achiever Award 2022-2025" },
    { img: goldImg, caption: "🥇 Gold Award - QCFI Chennai Chapter 2024" },
    { img: tcsImg, caption: "📊 Scored Good Marks in TCS NQT 2025" },
    { img: sooriImg, caption: "✨ Created a memento for Actor Soori" },
    { img: bestImg, caption: "🎤 Best Presentation Award - Symposium" },
    { img: danceImg, caption: "💃 2nd Prize Tri-Fest 2025 (Dance)" },
    { img: konguImg, caption: "🥇 First Prize - National Level Symposium" },
    { img: journalImg, caption: "📜 1 Journal Published" },
  ];

  return (
    <section id="achievements">
      <h2>Achievements 🏆</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          {achievements.map((item, index) => (
            <div className="image-wrapper" key={index}>
              <img src={item.img} alt={item.caption} />
              <p className="caption">{item.caption}</p>
            </div>
          ))}

          
          {achievements.map((item, index) => (
            <div className="image-wrapper" key={`dup-${index}`}>
              <img src={item.img} alt={item.caption} />
              <p className="caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
