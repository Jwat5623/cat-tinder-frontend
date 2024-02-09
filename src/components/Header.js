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
            <p>
            <NavLink to="/catindex">Lists</NavLink>
            </p>
            <p>
            <NavLink to="/catnew">Add a Cat</NavLink>
            </p>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

