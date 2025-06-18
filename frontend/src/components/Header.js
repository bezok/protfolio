import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            VB
          </a>
        </div>

        

        <div className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#products">Education</a></li>
            <li className="nav-item"><a href="#categories">Projects</a></li>
            <li className="nav-item"><a href="#about">About Me</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="action-button">
            <span className="action-icon">👤</span>
          </button>
         
        </div>
      </div>
    </header>
  );
};

export default Header;