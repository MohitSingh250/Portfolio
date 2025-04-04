import React from 'react';
import "./Header.css"
const Header = ({ 
  activeSection, 
  isMenuOpen, 
  isScrolling, 
  darkMode, 
  scrollToSection, 
  setIsMenuOpen, 
  setDarkMode 
}) => {
  return (
    <header className={`portfolio-header ${isScrolling ? 'scrolling' : ''}`}>
      <div className="logo">
        <span className="logo-text">MS</span>
      </div>
      
      <div className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`} 
           onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" className={activeSection === "home" ? "active" : ""} 
               onClick={() => scrollToSection("home")}>Home</a></li>
          <li><a href="#about" className={activeSection === "about" ? "active" : ""} 
               onClick={() => scrollToSection("about")}>About</a></li>
          <li><a href="#projects" className={activeSection === "projects" ? "active" : ""} 
               onClick={() => scrollToSection("projects")}>Projects</a></li>
          <li><a href="#skills" className={activeSection === "skills" ? "active" : ""} 
               onClick={() => scrollToSection("skills")}>Skills</a></li>
          <li><a href="#education" className={activeSection === "education" ? "active" : ""} 
               onClick={() => scrollToSection("education")}>Education</a></li>
          <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} 
               onClick={() => scrollToSection("contact")}>Contact</a></li>
        </ul>
      </nav>
      
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;