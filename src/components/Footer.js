  import React from 'react';
  import '../styles/Footer.css';

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} NV Restaurant. All rights reserved.
          </p>
          <ul className="footer-social-list">
            <li className="footer-social-item">
              <a href="/" className="footer-social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="footer-social-item">
              <a href="/" className="footer-social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footer-social-item">
              <a href="/" className="footer-social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };

  export default Footer;