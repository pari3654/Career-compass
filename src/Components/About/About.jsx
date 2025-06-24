import React from 'react';
import './About.css';
import about from '../../assets/about.png';

const About = () => {
  return (
    <div className="about-section" id='About'>
      <div className="about-content">
        <div className="about-text">
          <h2>About CareerCompass</h2>
          <p>
            CareerCompass is a modern career guidance platform created to support students and young professionals in navigating their career journey with clarity and confidence.
          </p>
          <p>
            Whether you're crafting your first resume, building soft skills, or exploring potential career tracks, CareerCompass brings together trusted tools, actionable tips, and curated roadmaps to make your path forward easier.
          </p>
          <p>
            We believe career development shouldn't be overwhelming. That's why we aim to simplify the process — making high-quality career resources more accessible, especially for students preparing to enter the workforce.
          </p>
        </div>
        <div className="about-image">
          <img src={about} alt="Career guidance illustration" />
        </div>
      </div>
    </div>
  );
};

export default About;
