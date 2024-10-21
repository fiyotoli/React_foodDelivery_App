// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg'; // Adjust the path to your image

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center mt-5 pt-5">
      <div className="container">
        <div className="row">
          {/* Left Section: Text */}
          <div className="text-section col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start mb-4 mb-md-0">
            <h1 className="font-weight-bolder display-4" >
              Welcome to <span className='text-danger'>FoodDelivery</span>
            </h1>
            <p className="lead mt-3">
              Experience the best food delivery service right at your doorstep! Fresh and delicious meals from your favorite restaurants.
            </p>
            <span>
            <Link to="/menu" className="btn btn-danger rounded-pill p-2 px-3">
              Order Now
            </Link>
            </span>
           
          </div>

          {/* Right Section: Circular Image */}
          <div className="image-section col-12 col-md-6 d-flex justify-content-center">
            <img
              src={heroImage}
              alt="Delicious food"
              className="img-fluid rounded-circle" // Bootstrap's img-fluid and rounded-circle classes
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }} // Ensure responsiveness
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
