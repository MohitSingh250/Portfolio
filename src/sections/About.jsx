import React from 'react';
import "./About.css"
import MohitImage from '../images/Mohit.jpg';
const About = React.forwardRef((props, ref) => {
  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
            <img src={MohitImage} alt="Mohit Singh" />  
        </div>
        <div className="about-text">
            <h3>Frontend Developer Passionate About Crafting Intuitive User Experiences</h3>
            <p>
            I'm a dedicated frontend developer focused on building responsive and user-friendly web 
            applications. My expertise lies in modern JavaScript frameworks, particularly React, and I 
            have a strong interest in UI/UX design principles.
            </p>
            <p>
            With a solid foundation in HTML, CSS, and JavaScript, I love transforming static designs into 
            interactive experiences. Currently, I’m expanding my skills by learning full-stack development, 
            exploring both frontend and backend technologies to create well-rounded applications.
            </p>
            <p>
            My goal is to develop seamless digital experiences that delight users while following best 
            practices in performance and accessibility. I’m always eager to learn new tools and techniques 
            to stay ahead in the ever-evolving world of web development.
            </p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">Mohit Singh</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">mscrick01@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">+91-9756812554</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">Mathura, Up, India</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Availability:</span>
              <span className="detail-value availability-status">Available for freelance</span>
            </div>
          </div>
          <a href="///Users/mohitsingh/Downloads/Resume-MOHIT%20SINGH.pdf" download className="download-resume">
            <span className="download-icon">📄</span>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
});

export default About;