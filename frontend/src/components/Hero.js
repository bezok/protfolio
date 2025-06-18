import React, { useState, useEffect } from 'react';
import './Hero.css';

const skills = [
  {
    title: "JavaScript Developer",
    description: "Experienced in ES6+, asynchronous programming, and DOM manipulation.",
    imageText: "JavaScript"
  },
  {
    title: "React Enthusiast",
    description: "Build fast, responsive SPAs using React, Hooks, and Context API.",
    imageText: "React"
  },
  {
    title: "Backend with Node.js",
    description: "REST APIs using Express.js with MongoDB & PostgreSQL integration.",
    imageText: "Node.js"
  },
  {
    title: "AI/ML Explorer",
    description: "Knowledge in machine learning workflows using Python, TensorFlow & PyTorch.",
    imageText: "ML/AI"
  },
  {
    title: "Cloud Learner (AWS)",
    description: "Hands-on with AWS S3, EC2, and deploying full-stack applications.",
    imageText: "AWS"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="hero-content">
              <div className="hero-text">
                <h1>{skill.title}</h1>
                <p>{skill.description}</p>
                <a href="#contact">
                  <button className="hero-button">Contact Me</button>
                </a>
              </div>
              <div className="hero-image">
                <div className="placeholder-image">
                  <span>{skill.imageText}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="hero-controls">
          <button className="hero-arrow" onClick={prevSlide}>‹</button>
          <div className="hero-dots">
            {skills.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setSlide(index)}
              ></button>
            ))}
          </div>
          <button className="hero-arrow" onClick={nextSlide}>›</button>
        </div>
      </div>

      <div className="hero-features">
        <div className="feature">
          <div className="feature-icon">💡</div>
          <div className="feature-text">
            <h3>Problem Solver</h3>
            <p>Analytical and logical thinking.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">📈</div>
          <div className="feature-text">
            <h3>Continuous Learner</h3>
            <p>Always growing with new tech.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">🤝</div>
          <div className="feature-text">
            <h3>Team Player</h3>
            <p>Collaboration and communication.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
