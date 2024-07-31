import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about-us">
        <h3>ABOUT US</h3>
        <p>Driftz Clothing Pvt Ltd</p>
        <a href="/explore">Explore to CHANGE.</a>
        
      </div>
      <div className="footer-section policies">
        <h3>POLICIES</h3>
        <a href="/return">Return Your Order</a>
        <a href="/shipping">Shipping Policy</a>
        <a href="/refund">Return, Refund, and Cancellation</a>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/fraud">Fraud Protection</a>
      </div>
      <div className="footer-sectionn newsletter">
        <h3>NEWSLETTER</h3>
        <p>You can be the first one to know about our new releases, 
            <br/>
            latest offers and more. </p>
        <input type="email" placeholder="Your E-mail" />
        <button>→</button>
      </div>
      <div className="footer-sectionn follow-us">
        <h3>FOLLOW US</h3>
        <p>Stay in touch!</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
