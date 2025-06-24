import React from 'react';
import './Resources.css';
import resume from '../../assets/resume.png';
import communication from '../../assets/communication.png';
import career from '../../assets/career.png';

const Resources = () => {
  return (
    <div className='roadmaps-section' id='Resources'>
      <h2 className='section-heading'>Explore Our Career Tools</h2>
      <p className='section-subheading'>
        Curated resources designed to help you write resumes, build skills, and plan your career path with confidence.
      </p>
      

    <div className='roadmaps'>
      <a
        href="https://in.indeed.com/career-advice/resumes-cover-letters/how-to-make-a-resume-with-examples"
        className="card"
      >
        <img src={resume} alt="Resume" />
        <h3>Resume  Builder</h3>
        <p>Craft professional resumes to stand out in today's job market.</p>
      </a>

      <a
        href="https://in.indeed.com/career-advice/resumes-cover-letters/communication-skills"
        className="card"
      >
        <img src={communication} alt="Communication Skills" />
        <h3>Communication Skills</h3>
        <p>Master public speaking and real-world communication skills employers value.</p>
      </a>

      <a
        href="https://roadmap.sh/"
        className="card"
      >
        <img src={career} alt="Career Roadmaps" />
        <h3> Tech Career Roadmaps</h3>
        <p>Follow step-by-step roadmaps designed for careers in tech industry.</p>
      </a>
    </div>
    </div>
  );
};

export default Resources;
