import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2>Splitwise</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>Lorem ipsum</li>
            <li>Dolor sit amet</li>
            <li>Consectetur</li>
            <li>Adipiscing elit</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: lorem@ipsum.com</li>
            <li>Phone: +91 12345 67890</li>
            <li>Address: Lorem Ipsum Street</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Splitwise Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;