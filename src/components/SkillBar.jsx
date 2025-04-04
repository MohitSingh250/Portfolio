import React from 'react';
import "./SkillBar.css"
const SkillBar = ({ skill, level }) => (
  <div className="skill-item">
    <div className="skill-info">
      <p className="skill-name">{skill}</p>
      <p className="skill-level">{level}%</p>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default SkillBar;