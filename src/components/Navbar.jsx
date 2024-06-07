import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Binar Car Rental</a>
      </div>
      <div className="navbar-links">
        <a href="#services">Our Services</a>
        <a href="#why-us">Why Us</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
      </div>
    </nav>
  );
}

export default Navbar;
