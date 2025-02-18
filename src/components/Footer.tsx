import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/anshu" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/anshu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/anshu" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>&copy; 2023 Anshu Kumari. All rights reserved.</p>
    </footer>
  );
};

export default Footer;