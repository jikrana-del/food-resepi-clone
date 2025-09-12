import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Logo + About */}
          <div className="footer-section">
            <h2 className="footer-logo">FoodHub</h2>
            <p>Your favorite place to order delicious meals online!</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/food">Menu</a></li>
              <li><a href="/reviews">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: support@foodhub.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} FoodHub. All rights reserved.
        </div>
      </footer>

      {/* ---------- CSS Inside JSX ---------- */}
      <style>{`
        .footer {
          background-color: #222;
          color: white;
          padding: 40px 20px 10px;
          font-family: 'Segoe UI', sans-serif;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: auto;
        }

        .footer-section {
          flex: 1 1 200px;
          margin: 20px;
        }

        .footer-logo {
          font-size: 24px;
          color: #ff7043;
        }

        .footer-section h3 {
          color: #ff7043;
          margin-bottom: 10px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 8px;
        }

        .footer-section ul li a {
          color: #bbb;
          text-decoration: none;
        }

        .footer-section ul li a:hover {
          color: white;
        }

        .footer-social a {
          margin-right: 15px;
          font-size: 20px;
          color: #bbb;
          transition: 0.3s;
        }

        .footer-social a:hover {
          color: #ff7043;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          padding-top: 10px;
          border-top: 1px solid #444;
          font-size: 14px;
          color: #aaa;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .footer-section {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
