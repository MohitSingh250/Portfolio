import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./index.css";

// Import components
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

// Import data
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { education } from "./data/education";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Theme toggler
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observers for sections
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.3 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.3 });
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 });

  // Update active section based on scroll position
  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (skillsInView) setActiveSection("skills");
    else if (educationInView) setActiveSection("education");
    else if (contactInView) setActiveSection("contact");
  }, [homeInView, aboutInView, projectsInView, skillsInView, educationInView, contactInView]);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`portfolio-main ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        isScrolling={isScrolling}
        darkMode={darkMode}
        scrollToSection={scrollToSection}
        setIsMenuOpen={setIsMenuOpen}
        setDarkMode={setDarkMode}
      />
      
      <main className="portfolio-content">
        <Hero 
          ref={homeRef} 
          scrollToSection={scrollToSection}
        />
        
        <About 
          ref={aboutRef}
        />
        
        <Projects 
          ref={projectsRef}
          projects={projects}
        />
        
        <Skills 
          ref={skillsRef}
          skills={skills}
        />
        
        
        <Education 
          ref={educationRef}
          education={education}
        />
        
        <Contact 
          ref={contactRef}
        />
      </main>
      
      <Footer 
        scrollToSection={scrollToSection}
      />
      
      <div className="scroll-to-top" onClick={() => scrollToSection("home")}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
}