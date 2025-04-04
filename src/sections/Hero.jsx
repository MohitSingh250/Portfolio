import React from 'react';
import "./Hero.css"
import Me from '../images/Me.jpg';
const Hero = React.forwardRef(({ scrollToSection }, ref) => {
  return (
    <section id="home" className="hero-section" ref={ref}>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hello, I'm</span>
          <span className="name">Mohit Singh</span>
          <span className="title">Frontend Developer</span>
        </h1>
        <p className="hero-description">
          I craft responsive websites where technology meets creativity
        </p>
        <div className="hero-cta">
          <button className="primary-btn" onClick={() => scrollToSection("projects")}>
            View My Work
          </button>
          <button className="secondary-btn" onClick={() => scrollToSection("contact")}>
            Contact Me
          </button>
        </div>
        <div className="social-links">
          <a href="https://github.com/MohitSingh250" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <i className="fab fa-github"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="git-hub" /></i>
          </a>
          <a href="https://www.linkedin.com/in/mohit-singh-441630323/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <i className="fab fa-linkedin"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png" alt="linkedin" /></i>
          </a>
          <a href="mailto:mscrick01@gmail.com" className="social-icon email">
            <i className="fas fa-envelope"><img src="https://cdn-icons-png.flaticon.com/512/8056/8056414.png" alt="Mail" /></i>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={Me} alt="Mohit Singh" />
        <div className="hero-background-shape"></div>
      </div>
      <div className="scroll-indicator" onClick={() => scrollToSection("about")}>
        <span className="scroll-text">Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
});

export default Hero;