import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import "./Projects.css"
const Projects = React.forwardRef(({ projects }, ref) => {
  const [filter, setFilter] = useState('all');

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="section-header">
        <h2>My Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-filter">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} 
          onClick={() => setFilter('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} 
          onClick={() => setFilter('fullstack')}
        >
          Full Stack
        </button>

      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="more-projects">
        <a href="https://github.com/MohitSingh250" target="_blank" rel="noopener noreferrer" className="github-link">
          View More on GitHub <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
});

export default Projects;