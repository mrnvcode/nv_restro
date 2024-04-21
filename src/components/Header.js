import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">NV Restaurant</h1>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/" className="header-nav-link"> {/* Update link to point to homepage */}
              Home
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/products" className="header-nav-link"> {/* Update link to point to products page */}
              Products
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/contact" className="header-nav-link"> {/* Navigate to "/contact" */}
              Contact
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/cart" className="header-nav-link"> {/* Navigate to "/cart" */}
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
