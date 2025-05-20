import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'Unity (C#)', level: 90 },
    { name: 'Blender (3D Modelleme)', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'C', level: 70 },
    { name: 'JavaScript', level: 65 },
    { name: 'Oyun Tasarımı & Prototipleme', level: 80 },
    { name: 'Veri Yapıları & Algoritmalar', level: 75 }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1>Neler Yapabilirim?</h1>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
