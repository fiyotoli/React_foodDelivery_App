// src/pages/Contact.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-center text-danger">Contact Information</h2>
            <p className="text-center text-muted">
                We are here to assist you! If you have any questions or need support, 
                please feel free to reach out through any of the contact methods listed below. 
                Our team is ready to help you with your needs.
            </p>
            <div className="row mt-4">
                {/* Left Section - Contact Cards */}
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="card p-3 shadow border-danger">
                                <FaPhone size={40} className="mb-2 text-danger" />
                                <h5>Phone</h5>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card p-3 shadow border-danger">
                                <FaEnvelope size={40} className="mb-2 text-danger" />
                                <h5>Email</h5>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card p-3 shadow border-danger">
                                <FaMapMarkerAlt size={40} className="mb-2 text-danger" />
                                <h5>Address</h5>
                                <p>1234 Example Street, City, Country</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card p-3 shadow border-danger">
                                <FaClock size={40} className="mb-2 text-danger" />
                                <h5>Hours</h5>
                                <p>Mon - Fri: 9 AM - 5 PM</p>
                                <p>Sat: 10 AM - 4 PM</p>
                                <p>Sun: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Section - Paragraphs */}
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <p className="text-muted">
                                Our customer service team is dedicated to providing you with the best experience. 
                                We are here to answer any questions you may have about our products or services.
                            </p>
                        </div>
                        <div className="col-12 mb-3">
                            <p className="text-muted">
                                Your feedback is important to us! If you have any suggestions or comments, please do not hesitate to reach out.
                                We value your input and strive to improve our services based on your experiences.
                            </p>
                        </div>
                        <div className="col-12 mb-3">
                            <p className="text-muted">
                                Follow us on our social media channels to stay updated on our latest news, promotions, and offers. 
                                We love connecting with our customers online!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Follow Us Section */}
            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <h5>Follow Us</h5>
                    <div className="d-flex justify-content-center">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FaFacebook size={30} className="text-danger" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FaTwitter size={30} className="text-danger" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FaInstagram size={30} className="text-danger" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
