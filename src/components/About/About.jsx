import React from 'react';
import aboutImage from '../../assets/about-image.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <div className="container-fluid   bg-light">
        <h1 className='font-weight-bolder text-center'>About <span className='text-danger'> Us
       </span></h1>
       <p className='text-center text-muted container col-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ducimus voluptatem voluptate qui, consectetur obcaecati omnis eos aliquid officiis ea.</p>
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
          <button className="btn btn-danger">Read More</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
