import React from "react";
import "./style.css";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce platform with payment integration.",
    image: "https://cdn.pixabay.com/photo/2024/06/01/14/00/ai-8802304_1280.jpg",
    link: "https://gleeful-tanuki-14804c.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase skills and projects.",
    image: "https://cdn.pixabay.com/photo/2024/01/10/16/21/laptop-8499942_1280.jpg",
    link: "https://teal-frangollo-87e10d.netlify.app/",
  },
  {
    title: "Blog Application",
    description: "A blog platform with features like posting, commenting, and likes.",
    image: "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg",
    link: "https://react-recipe-app-theta.vercel.app/52865",
  },
  {
    title: "Task Manager",
    description: "A task management application to organize daily activities.",
    image: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
    link: "https://stunning-boba-183d57.netlify.app/",
  },
  {
    title: "E-commerce",
    description: "A task management application to organize daily activities.",
    image: "https://cdn.pixabay.com/photo/2021/12/08/19/34/laptop-6856557_1280.jpg",
    link: "https://reunian.vercel.app/",
  },
  {
    title: "Todo-List",
    description: "A task management application to organize daily activities.",
    image: "https://cdn.pixabay.com/photo/2017/09/02/15/38/image-editing-2707653_1280.jpg",
    link: "https://sampletodo23.ccbp.tech/",
  },
  {
    title: "Filter Project",
    description: "A task management application to organize daily activities.",
    image: "https://cdn.pixabay.com/photo/2017/01/17/03/57/desktop-1985856_1280.jpg",
    link: "https://productlistapp.ccbp.tech/",
  },
  {
    title: "Random Images",
    description: "A task management application to organize daily activities.",
    image: "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg",
    link: "https://randomimage.ccbp.tech/",
  },
];

const Project = () => {
  return (
    <div className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
