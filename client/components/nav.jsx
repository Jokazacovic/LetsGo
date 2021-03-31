import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav-bar">
    <nav>
      <span>
      <Link to="/landing">
        Let's Go
      </Link>
        <Link to="/landing">
          <button type="button">Dashboard</button>
        </Link>
        <Link to="/input">
          <button type="button">New Trip</button>
        </Link>
        <Link to="/">
          <button type="button">Sign Out</button>
        </Link>
      </span>
    </nav>
  </div>
);

export default Nav;
