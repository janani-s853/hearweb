import React from 'react';
import './footer.css';
import { MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-column brand">
          <h2 className="footer-brand">H . E . A . R</h2>
          <p>Your trusted partner in hearing wellness. Based in Chennai, we offer high-quality hearing aids and expert consultation services.</p>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-column links">
          <h3>Explore</h3>
          <ul>
            <li><a href="/products">Hearing Aids</a></li>
            <li><a href="/consultation">Book Consultation</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h3>Contact</h3>
          <p>Email: hearcompany25@gmail.com</p>
          <p>Phone: +91 8148662839</p>
          <p>Saraswathi Nagar, 7th street, Adambakkam, Chennai-88, India</p>
        </div>

        <div className="footer-column newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe for offers and updates.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} H.E.A.R. All rights reserved.</p>
      </div>

<Link to="/consultation" className="floating-button">
  <MessageCircle size={20} />
  <span>Consult Now</span>
</Link>

    </footer>
  );
};

export default Footer;
