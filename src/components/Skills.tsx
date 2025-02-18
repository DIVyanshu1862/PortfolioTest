import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = [
    'MERN Stack (MongoDB, Express, React, Node.js)',
    'JavaScript/TypeScript',
    'HTML/CSS',
    'Software Testing',
    'Data Structures & Algorithms',
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;