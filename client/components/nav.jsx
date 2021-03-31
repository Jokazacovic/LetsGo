import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav-bar">
    <nav>
      <span>
      <Link to="/">
        Let's Go
      </Link>
        <Link to="/landing">
          <button type="button">Dashboard</button>
        </Link>
        <Link to="/input">
          <button type="button">New Trip</button>
        </Link>
      </span>
    </nav>
  </div>
);

export default Nav;
