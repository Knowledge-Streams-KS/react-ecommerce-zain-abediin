import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'; // Ensure this path matches the location of your CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/about-us">About Us</NavLink></li>
          <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <NavLink to="/signin">Sign In / Registration</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </header>
  );
};

export default Header;
