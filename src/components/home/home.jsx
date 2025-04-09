import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Zeepo</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">DashBoard</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Login/SignUp</a></li>
        </ul>
      </nav>
      
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