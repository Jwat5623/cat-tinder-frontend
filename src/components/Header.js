import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <div className="welcome-message">
        <h1>Welcome to Purrfect Matches! 🐾</h1>
      </div>
      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
