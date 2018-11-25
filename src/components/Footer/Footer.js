import React from 'react';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return <div className="footer">
    <div className="footer-social-media">
      <a href="https://twitter.com/TheDanielVu" title="Twitter"><FaTwitterSquare className="footer-social-media-icon" /></a>
      <a href="https://www.linkedin.com/in/daniel-vu-a2576699/" title="LinkedIn"><FaLinkedin className="footer-social-media-icon" /></a>
      <a href="https://github.com/dv297" title="GitHub"><FaGithubSquare className="footer-social-media-icon" /></a>
    </div>
  </div>
};

export default Footer;
