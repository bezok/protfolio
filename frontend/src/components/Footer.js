import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to get my latest portfolio updates and tech insights.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-col">
            <div className="footer-logo">Your Name</div>
            <p className="footer-description">
              Web developer passionate about crafting clean, user-friendly interfaces and building meaningful digital experiences.
            </p>
            <div className="social-links">
              <a href="https://github.com/yourusername" className="social-link">🐙</a>
              <a href="https://linkedin.com/in/yourusername" className="social-link">💼</a>
              <a href="https://twitter.com/yourusername" className="social-link">🐦</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a></li>
            </ul>
          </div>

          <div className="footer-col contact-info">
            <h4>Contact</h4>
            <p><strong>Email:</strong> your.email@example.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Location:</strong> Your City, Your Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
