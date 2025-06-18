import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: '💻',
      title: 'Technical Skills',
      description: 'Strong foundation in building modern web applications.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Passionate about creating unique solutions and exploring new technologies.'
    },
    {
      icon: '🔍',
      title: 'Problem Solving',
      description: 'Enjoy tackling complex challenges with a logical approach.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Believer in teamwork, clear communication, and shared success.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>A dedicated developer passionate about building impactful projects</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="placeholder-image">
              <span>Your Photo</span>
            </div>
          </div>
          <div className="about-text">
            <h3>Hi, I'm Vaishnav Benny</h3>
            <p>
              I'm a driven software developer with a focus on creating user-friendly, efficient, and scalable applications.
              My journey started with curiosity and has evolved into a passion for crafting digital solutions that make a difference.
            </p>
            <p>
              I thrive on learning new technologies and applying them to real-world problems. My portfolio includes projects 
              in web development, AI integration, and cloud services.
            </p>
            <p>
              Whether it's working independently or collaborating with a team, I value quality, attention to detail, 
              and delivering meaningful results.
            </p>
            <button className="learn-more-btn">My Story</button>
          </div>
        </div>

        <div className="our-values">
          <h3>Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
