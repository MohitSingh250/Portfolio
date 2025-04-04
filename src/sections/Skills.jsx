import React from 'react';
import SkillBar from '../components/SkillBar';
import "./Skills.css"
const Skills = React.forwardRef(({ skills }, ref) => {
  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-content">
        <div className="skills-category">
          <h3 className="category-title">Frontend Development</h3>
          <div className="skills-list">
            {skills.frontend.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3 className="category-title">Backend Development</h3>
          <div className="skills-list">
            {skills.backend.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3 className="category-title">Tools & Technologies</h3>
          <div className="skills-list">
            {skills.tools.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3 className="category-title">Soft Skills</h3>
          <div className="soft-skills">
            {skills.soft.map((skill, index) => (
              <div key={index} className="soft-skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;