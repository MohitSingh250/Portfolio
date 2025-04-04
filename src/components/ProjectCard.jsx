import React, { useState } from 'react';
import "./ProjectCard.css"
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`project-card ${project.featured ? 'featured' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className={`project-overlay ${isHovered ? 'hovered' : ''}`}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;