import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { PhoneOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoImage from '../../assets/logo.jpg'; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-danger bg-opacity-10 text-dark mt-5 p-4">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-3 mb-2 text-center">
            <img src={logoImage} alt="Logo" style={{ width: '100px' }} /> {/* Small logo size */}
            <p className="mt-2">Delivering delicious meals straight to your door. Your satisfaction is our priority!</p>
          </div>
          <div className="col-md-3 mb-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/menu" className="text-dark" style={{ textDecoration: 'none' }}>Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-dark" style={{ textDecoration: 'none' }}>About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark" style={{ textDecoration: 'none' }}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <div className="d-flex align-items-center mb-2">
              <EnvironmentOutlined className="text-danger" style={{ fontSize: '20px', marginRight: '10px' }} />
              <span className="text-dark">Bole sub city, Addids Ababa, Ethiopia</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <PhoneOutlined className="text-danger" style={{ fontSize: '20px', marginRight: '10px' }} />
              <span className="text-dark">+1 (555) 123-4567</span>
            </div>
            <div className="d-flex align-items-center">
              <MailOutlined className="text-danger" style={{ fontSize: '20px', marginRight: '10px' }} />
              <span className="text-dark">support@fooddelivery.com</span>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
             <li>Fast Delivery</li>
              <li >Catering Services</li>
              <li>Meal Subscriptions</li>
              <li>Personalized Meal Plans</li>
              <li>Corporate Catering</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <h5>Follow Us</h5>
          <div className="social-icons mb-3">
            <a href="https://facebook.com" className="text-danger mx-2">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-danger mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-danger mx-2">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-danger mx-2">
              <FaLinkedin size={24} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Food Delivery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
