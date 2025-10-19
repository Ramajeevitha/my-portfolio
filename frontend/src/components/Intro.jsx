import React from "react";
import "../styles/Intro.css";
import introVideo from "../assets/intro.mp4"; 

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-container">
        

        <div className="video-wrapper">
          <video
            src={introVideo}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="intro-video"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="intro-caption">
          A short glimpse into my journey.
        </p>
      </div>
    </section>
  );
};

export default Intro;
