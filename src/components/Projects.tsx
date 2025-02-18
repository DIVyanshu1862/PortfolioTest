import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with MERN stack.',
    },
    {
      title: 'Testing Automation Framework',
      description: 'Developed a testing framework for web applications.',
    },
    {
      title: 'DSA Problem Solver',
      description: 'A platform to practice and solve Data Structures and Algorithms problems.',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;