import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Anshu Kumari</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Hi, I'm Anshu Kumari</h1>
        <p>MERN Stack Developer | Professional Tester | DSA Enthusiast</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </header>
  );
};

export default Header;