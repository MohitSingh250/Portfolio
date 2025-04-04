import React from 'react';
import "./Footer.css"
const Footer = ({ scrollToSection }) => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">MS</span>
          <p className="tagline">Frontend Developer</p>
        </div>
        <div className="footer-links">
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={() => scrollToSection("home")}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection("about")}>About</a></li>
              <li><a href="#projects" onClick={() => scrollToSection("projects")}>Projects</a></li>
              <li><a href="#skills" onClick={() => scrollToSection("skills")}>Skills</a></li>
              <li><a href="#experience" onClick={() => scrollToSection("experience")}>Experience</a></li>
              <li><a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p><i className="fas fa-envelope"></i> mscrick01@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91-9756812554</p>
            <p><i className="fas fa-map-marker-alt"></i> Mathura, UP, India</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©️ {new Date().getFullYear()} Mohit Singh. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;