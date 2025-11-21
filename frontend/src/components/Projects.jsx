import React from "react";
import "../styles/Projects.css";

import jioImg from "../assets/jio.png";
import jeeImg from "../assets/jee.png";
import todoImg from "../assets/todo.png";
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

        
        <a href="https://github.com/Ramajeevitha/backend_todo" 
           target="_blank" rel="noreferrer" 
           className="project-card">
          <img src={todoImg} alt="Todo List" />
          <h3>Todo List</h3>
          <p>A Web Application for Todo List using PERN STACK</p>
        </a>

        <a href="https://github.com/Ramajeevitha/presidio_front" 
           target="_blank" rel="noreferrer" 
           className="project-card">
          <img src={jeeImg} alt="Hotel Management System" />
          <h3>Hotel Management App</h3>
          <p>Web app for hotel booking and customer management.</p>
        </a>

        
        <a href="https://github.com/Ramajeevitha/front" 
           target="_blank" rel="noreferrer" 
           className="project-card">
          <img src={crudImg} alt="CRUD App" />
          <h3>Student Management App</h3>
          <p>CRUD app using MERN to manage student IDs.</p>
        </a>

        <a href="https://github.com/Ramajeevitha/frontend-task-manager" 
           target="_blank" rel="noreferrer" 
           className="project-card">
          <img src={taskImg} alt="Task Manager" />
          <h3>Task Management App</h3>
          <p>Full-stack MERN app for efficient task management.</p>
        </a>

        
        <a href="https://www.figma.com/proto/bbWdfW0BDSiDOrMcMYDUjf/jio-replica?page-id=0%3A1&node-id=3-172&t=1EyWmFtzsGrpOKq6-1 - jio" 
           target="_blank" rel="noreferrer" 
           className="project-card">
          <img src={jioImg} alt="Jio Landing Page" />
          <h3>Jio Landing Page</h3>
          <p>A modern responsive landing page inspired by Jio.</p>
        </a>

        <a href="https://www.figma.com/design/WpCvZMdbmTCJjCBtTl9hyF/pizza?node-id=0-1&t=O6QMN6eODVtn5uKC-1 - pizza" 
           target="_blank" rel="noreferrer" 
           className="project-card">
          <img src={pizzaImg} alt="Pizza Shop" />
          <h3>Pizza Shop Design</h3>
          <p>A creative UI/UX design built with Figma.</p>
        </a>

        <a href="https://ramajeevithaportfolio.framer.website/" 
           target="_blank" rel="noreferrer" 
           className="project-card">
          <img src={portfolioImg} alt="Portfolio" />
          <h3>Rama Jeevitha - Portfolio</h3>
          <p>Designed portfolio using Framer Tool.</p>
        </a>

        <a href="https://github.com/yourname/seed-vault-ui" 
           target="_blank" rel="noreferrer" 
           className="project-card">
          <img src={seedImg} alt="Seed Vault" />
          <h3>Seed Vault Design</h3>
          <p>UI/UX design using Adobe Illustrator.</p>
        </a>

      </div>

      <section id="completed-projects">
        <div className="completed-projects-frame">
          <p>
            I have successfully completed 20+ projects including web development and UI/UX.
            Explore more on <a href="https://github.com/Ramajeevitha" target="_blank" rel="noreferrer">GitHub</a> and
            <a href="https://www.linkedin.com/in/ramajeevitha10" target="_blank" rel="noreferrer"> LinkedIn</a>.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Projects;
