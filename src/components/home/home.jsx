import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Navbar from '../navbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <main className="main-content">
        <h1 className="main-title">What Do You Want To Do Today ?</h1>

        <div className="action-cards">
          <div className="action-card earn-card">
            <h2>EARN</h2>
          </div>

          <div
            className="action-card learn-card"
            onClick={() => navigate('/learn')} // Added navigation
          >
            <h2>LEARN</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;