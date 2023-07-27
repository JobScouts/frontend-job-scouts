import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-16371'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-9 text-center'>
            <div className="footer-site-logo mb-4">
              <a href='/'>JobScouts</a>
            </div>
            <ul className='list-unstyled nav-links mb-4'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/AboutUs'>AboutUs</a>
              </li>
            </ul>
            <div className="stay-in-touch mb-4">
              <h3 style={{color:'#FFFF'}}>Stay in touch</h3>
              <ul className="social-links">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="lg" className="facebook-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="lg" className="twitter-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="lg" className="instagram-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="linkedin-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="lg" className="youtube-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
