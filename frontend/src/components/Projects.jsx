import React from "react";
import "../styles/Projects.css";


import jioImg from "../assets/jio.png";
import jeeImg from "../assets/jee.png";
import jeesakImg from "../assets/jeesak.png";
import crudImg from "../assets/crud.png";
import pizzaImg from "../assets/jeesak pizza.png";
import seedImg from "../assets/seedvalut.png";
import taskImg from "../assets/taskmanager.png";
import portfolioImg from "../assets/PORTFOLIO.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects 💻</h2>
      <div className="project-grid">

        <div className="project-card">
          <img src={jioImg} alt="Jio Landing Page" />
          <h3>Jio Landing Page</h3>
          <p>A modern responsive landing page design inspired by Jio.</p>
        </div>

        <div className="project-card">
          <img src={jeeImg} alt="Hotel Management System" />
          <h3>Hotel Management System</h3>
          <p>A web application for managing hotel bookings, rooms, and customers.</p>
        </div>
        
        <div className="project-card">
          <img src={jeesakImg} alt="Mobile Hub" />
          <h3>Mobile Hub Application</h3>
          <p>An interactive Mobile Hub Application using Figma.</p>
        </div>

        <div className="project-card">
          <img src={crudImg} alt="CRUD App" />
          <h3>Student Management App</h3>
          <p>A CRUD app built using the MERN stack to manage student IDs.</p>
        </div>

        <div className="project-card">
          <img src={pizzaImg} alt="Pizza Shop" />
          <h3>Pizza Shop Design</h3>
          <p>A creative UI/UX design for a pizza shop, crafted using Figma.</p>
        </div>

        <div className="project-card">
          <img src={seedImg} alt="Seed Vault" />
          <h3>Seed Vault Design</h3>
          <p>UI/UX design for a seed shop using Adobe Illustrator.</p>
        </div>

        <div className="project-card">
          <img src={taskImg} alt="Task Manager" />
          <h3>Task Management App</h3>
          <p>A full-stack MERN application to manage tasks efficiently.</p>
        </div>

        <div className="project-card">
          <img src={portfolioImg} alt="Portfolio" />
          <h3>Rama Jeevitha - Portfolio</h3>
          <p>Designed portfolio using Framer Tool.</p>
        </div>
      </div>

      <section id="completed-projects">
        <div className="completed-projects-frame">
          <p>
            I have successfully completed over 20+ projects, ranging from full-stack web applications to creative UI/UX designs. 
            Explore more on{" "}
            <a href="https://github.com/Ramajeevitha" target="_blank" rel="noreferrer">GitHub</a>{" "}
            and{" "}
            <a href="https://www.linkedin.com/in/ramajeevitha10" target="_blank" rel="noreferrer">LinkedIn</a>.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Projects;
