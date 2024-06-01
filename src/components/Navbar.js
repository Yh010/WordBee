
import React from 'react';
import './NavBar.css';
import MadeWithLove from 'react-made-with-love';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Wordingle</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="https://github.com/Yh010" className="nav-link">
              <MadeWithLove by="Yash Hegde" emoji />
            </a>
          </li>
        </ul> 
      </div>
    </nav>
  );
};

export default Navbar;
