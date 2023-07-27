import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Company</h3>
        <ul className="footer-links">
          <li><a href="/About" style={{position:'relative',left: '20px'}}>About Us </a></li>
        </ul>
      </div>
      
      <div className="footer-content">
        <h3>Contact</h3>
        <ul className="footer-links">
          <li><a href="/help">Help Center</a></li>
          <li><a href="/Contact Us">Contact Us</a></li>
        </ul>
        <ul className="social-links">
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg" className="facebook-icon" /></a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg" className="twitter-icon" /></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" className="instagram-icon" /></a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" className="linkedin-icon" /></a></li>
          <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="lg" className="youtube-icon" /></a></li>
        </ul>
      </div>
      <div className="footer-content">
        <h3 style={{left:"15px", textAlign:'center'}}>Premium</h3>
        <p style={{left: '10px', textAlign:'center'}}>Premium is not available </p>
      </div>
    </footer>
  );
};

export default Footer;
