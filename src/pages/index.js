/**
 * @license
 * Copyright &copy 2018 Cerner Corporation
 *
 * @author Daniel Vu
 */

import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './Home.css';
import profilePicture from '../images/profile-optimized.jpg';

const Home = () => {
  return (
    <div className="home-body">
      <div className="profile-picture-container">
        <img src={profilePicture} className="profile-picture" alt="Daniel Vu" />
      </div>
      <div className="home-content">
        <div className="skills-header-container">
          <h1>Musician</h1>
          <h1>Frontend Dev</h1>
          <h1>Educator</h1>
        </div>
        <div className="home-text-container">
          <h2 className="welcome-header">Welcome to portfolio of Daniel Vu</h2>
          <p>
            Having graduated from the University of South Carolina with a B.S. in Computer Science, Daniel Vu moved to
            Kansas City to pursue a career in Software Engineering. He leans towards frontend development with a
            strong focus on creating a productive team environment by continuously helping create fruitful, enjoyable
            development experiences and helping others keep up to date with the latest technology stacks. He enjoys
            giving talks, and he loves finding new ways to promote varying aspects of software engineering to developers
            and students of all skill levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
