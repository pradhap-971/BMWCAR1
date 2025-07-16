import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const Footer = () => {
  return (
    <footer className="bmw-footer">
      <div className="footer-main">
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Find a Dealer</li>
            <li>Request a Test Drive</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Build your BMW</li>
            <li>BMW Financial Services</li>
            <li>BMW Safety</li>
            <li>BMW Premium Selection (Used Cars)</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Experience BMW</h4>
          <ul>
            <li>BMW Group</li>
            <li>BMW Excellence Club</li>
            <li>BMW Motorrad</li>
            <li>Charging Network</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Legal Disclaimer/Imprint</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
        <FaLinkedinIn />
        <RxCross1 />
      </div>

      <div className="footer-bottom">
        <p>© BMW AG 2025</p>
        <div className="footer-links">
          <a href="#">Legal Disclaimer/Imprint</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
