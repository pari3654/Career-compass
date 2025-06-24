import React, { useState } from 'react';
import './Testimonials.css';
import next from '../../assets/next.png';
import back from '../../assets/back.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';

const testimonialsData = [
  {
    name: 'Alina Rao',
    title: 'Final Year B.Tech Student',
    image: user2,
    message:
      'Choosing CareerCompass was one of the best decisions. The guidance, resources, and personal growth it offers exceeded my expectations.',
  },
  {
    name: 'Riya Shah',
    title: '3rd Year CS Student',
    image: user1,
    message:
      'The soft skill resources were just what I needed before my internship interview. It’s like having a mentor on your screen.',
  },
  {
    name: 'Kunal Verma',
    title: 'Computer Science Undergraduate',
    image: user3,
    message:
      'Loved how clear and focused the career roadmaps are. It saved me hours of confusion.',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handleBack = () => {
    setIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <div className="testimonials" id="Testimonials">
      <h2>What Students Say</h2>
      <div className="testimonial-slider">
        <button className="arrow left" onClick={handleBack}>
          <img src={back} alt="Back" />
        </button>

        <div className="testimonial-card">
          <div className="user-info">
            <img src={testimonialsData[index].image} alt="User" />
            <div>
              <h3>{testimonialsData[index].name}</h3>
              <span>{testimonialsData[index].title}</span>
            </div>
          </div>
          <p>{testimonialsData[index].message}</p>
        </div>

        <button className="arrow right" onClick={handleNext}>
          <img src={next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

