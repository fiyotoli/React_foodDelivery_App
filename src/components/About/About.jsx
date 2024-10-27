import React from 'react';
import aboutImage from '../../assets/about-image.jpg'; // Replace with your actual image path
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
const About = () => {
  return (
    <div className="container-fluid ">
        <h1 className='font-weight-bolder text-center'>About <span className='text-danger'> Us
       </span></h1>
         <div className='container'>
      <div className="row align-items-center p-4 rounded">
        {/* Left Section: Image */}
        <div className="col-md-6 mb-3">
          <img src={aboutImage} alt="About"  className="img-fluid rounded" />
        </div>

        {/* Right Section: Title, Paragraph, and Button */}
        <div className="col-md-6">
          <h2 className="font-weight-bolder">About <span className="text-danger">Us</span> </h2>
          <p className="text-muted">
            We are committed to providing the best service possible. Our team is dedicated to ensuring customer satisfaction and delivering top-quality products that meet your needs. Our mission is to make your experience enjoyable and memorable.
          </p>
          <Link to ="/about"><button className="btn btn-danger">Read More</button></Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
