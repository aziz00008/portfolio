// src/pages/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/path-to-image1.jpg', // Place images in public folder or import them
    tech: ['React', 'Bootstrap'],
    liveLink: 'https://live-demo.com',
    repoLink: 'https://github.com/yourusername/project-one',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mb-3">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="badge bg-secondary me-1">{tech}</span>
                  ))}
                </div>
                <div className="mt-auto">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
