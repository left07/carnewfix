import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Jalan Suryo No. 161 Mayangan Kota Probolinggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="footer-nav">
        <a href="#services">Our Services</a>
        <a href="#why-us">Why Us</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="footer-social">
        <a href="...">Facebook</a>
        <a href="...">Instagram</a>
        <a href="...">Twitter</a>
        <a href="...">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
