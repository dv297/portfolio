import React from 'react';

import './PageLayout.css';
import Navbar from '../Navbar/Navbar';

const PageLayout = ({ children }) => (
  <div className="page">
    <div className="navbar-container">
      <Navbar />
    </div>
    <div className="below-nav-container">
      {children}
    </div>
  </div>
);

export default PageLayout;
