import React from 'react';
import './Categories.css';

const Categories = () => {
  const projects = [
    {
      id: 1,
      name: 'Applicant Tracking System',
      description: 'Analyze CVs and rank applicants using LLMs.',
      imageText: 'ATS',
      color: '#000'
    },
    {
      id: 2,
      name: 'Real Estate Price Predictior',
      description: 'Predict Prices based on Database and user input.',
      imageText: 'Charge Predictor',
      color: '#000'
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'Personal portfolio to showcase my skills & projects.',
      imageText: 'Portfolio',
      color: '#000'
    }
  ];

  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Here are some projects I have built and contributed to</p>
        </div>

        <div className="categories-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="category-card"
            >
              <div className="category-image">
                <div 
                  className="placeholder-image"
                  style={{ backgroundColor: project.color }}
                >
                  <span>{project.imageText}</span>
                </div>
              </div>
              <div className="category-name" style={{ color: project.color }}>
                {project.name}
              </div>
              <p className="category-description">{project.description}</p>
              <button 
                className="category-button"
                style={{ backgroundColor: project.color }}
              >
                View Project
              </button>
            </div>
          ))}
        </div>

        <div className="categories-banner">
          <div className="banner-content">
            <h3>Featured Project</h3>
            <h2>Applicant Tracking System</h2>
            <p>Automatically analyze CVs and shortlist top candidates using AI models.</p>
            <button className="banner-button">Learn More</button>
          </div>
          <div className="banner-image">
            <div className="placeholder-image">
              <span>ATS Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
