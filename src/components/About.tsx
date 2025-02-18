import React from 'react';
import './About.css';
import profileImage from '../assets/Profile.jpg'; // Make sure to place your image inside the 'assets' folder

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <img src={profileImage} alt="Anshu Kumari" className="profile-image" />
      <p>
        Hi, I'm Anshu Kumari, a passionate MERN stack developer with expertise in building scalable web applications.
        I also have a strong foundation in software testing and problem-solving using Data Structures and Algorithms.
      </p>
    </section>
  );
};

export default About;
