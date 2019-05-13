import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import './Home.css'
import profilePicture from '../images/profile-optimized.jpg'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <main className="home-body">
        <div className="home-content">
          <div className="profile-picture-container">
            <img
              src={profilePicture}
              className="profile-picture"
              alt="Daniel Vu"
            />
          </div>
          <div className="skills-header-container">
            <h1>Musician</h1>
            <h1>Developer</h1>
            <h1>Educator</h1>
          </div>
          <div className="home-text-container">
            <h2 className="welcome-header">Hey! I'm Daniel Vu!</h2>
            <p>
              I graduated from the University of South Carolina with a B.S. in
              Computer Science and moved to Kansas City to pursue a career in
              Software Engineering. I love front-end development and I strongly
              focus on creating a productive team environment by continuously
              helping create fruitful, enjoyable development experiences and
              helping others keep up to date with the latest technology stacks.
              I enjoy giving talks, and I love finding new ways to promote
              varying aspects of software engineering to developers and students
              of all skill levels.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
