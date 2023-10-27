import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ switchTheme, theme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <button onClick={switchTheme}>Switch Theme</button>
      <Link to="/">Home</Link>
      <Link to="/register">Streams</Link>
      <Link to="/party">Party</Link>
      <Link to="/premium">Premium</Link>
      <Link className="highlighted" to="/">Gamor</Link>
      <Link className={`button ${theme}`} to="/login">Sign in</Link>
      <Link className={`button ${theme}`} to="/register">Create account</Link>
    </nav>
  );
};

export default Navbar;