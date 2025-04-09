import React from 'react';
import './learn.css';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-container">
      <header className="learn-header">
        <h1>Game teach with us</h1>
        <p className="subtitle">Become an instructor and change lives — including your own</p>
        <div className="divider"></div>
        <button 
          className="cta-button"
          onClick={() => navigate('/dashboard')} // Or your preferred navigation
        >
          Get started
        </button>
      </header>

      <section className="learning-content">
        <div className="courses-section">
          <h2>Enhance Your Skills</h2>
          <div className="course-cards">
            {/* Sample course cards */}
            <div className="course-card">
              <h3>Game Development Fundamentals</h3>
              <p>Learn the basics of game design and programming</p>
            </div>
            <div className="course-card">
              <h3>Advanced Unity Techniques</h3>
              <p>Master professional game development skills</p>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>Why Learn With Us?</h2>
          <ul className="features-list">
            <li>Industry expert instructors</li>
            <li>Hands-on projects</li>
            <li>Community support</li>
            <li>Career guidance</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Learn;