import React from "react";
import "../styles/Experience.css";


const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience 💼</h2>
      <div className="experience-timeline">
        <div className="experience-item">
          <div className="experience-content">
            <h3>UX/UI Designer</h3>
            <p>
              <strong>Techvolt Software Pvt Ltd</strong> | 03/06/2025 - 18/07/2025
            </p>
            <p>
              I worked as a UX/UI Designer intern at Techvolt Software Pvt Ltd,
              where I developed Mobile Hub applications using Figma.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-content">
            <h3>Full Stack Developer</h3>
            <p>
              <strong>CodeBoosters</strong> | 08/05/2024 - 07/06/2024
            </p>
            <p>
              I worked as a Full Stack Developer intern at CodeBoosters, where I
              developed web applications for Job-Portal using React, Node.js, and
              MongoDB, gaining valuable experience in both frontend and backend
              development.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-content">
            <h3>Full Stack Developer</h3>
            <p>
              <strong>Nitroware Technologies Pvt Ltd</strong> | 27/12/2024 -
              26/01/2025
            </p>
            <p>
              I worked as a Full Stack Developer intern at Nitroware Technologies
              Pvt Ltd, where I learned and applied Django for building efficient
              web applications, enhancing my backend development skills.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-content">
            <h3>UX/UI Intern</h3>
            <p>
              <strong>Cybernaut</strong> | 18/02/2025 - 19/03/2025
            </p>
            <p>
              I currently work as a UI/UX Designer intern at Cybernaut, where I
              focus on creating user-friendly designs and improving user
              experiences for various digital platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
