import React from 'react';
import "./Education.css"
const Education = React.forwardRef(({ education }, ref) => {
  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="section-header">
        <h2>My Education</h2>
        <div className="section-line"></div>
      </div>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-period">{edu.period}</div>
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-description">{edu.description}</p>
              {edu.certificates && (
                <div className="certificates-list">
                  <h5>Certifications:</h5>
                  <ul>
                    {edu.certificates.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Education;