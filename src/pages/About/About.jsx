import React from 'react';
import founderImage from '../../assets/founder.jpg'; // Update the path based on your folder structure

const About = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {/* About Section */}
        <div className="col-md-12 text-center mb-5">
          <h2 className="font-weight-bold" style={{ fontSize: '2.5rem' }}>About <span className='text-danger'>Us</span> </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Welcome to our food delivery website! We are dedicated to bringing you delicious meals right to your door. Our goal is to make it easy and convenient for you to enjoy high-quality food from the comfort of your own home. Whether you’re craving fast food, gourmet cuisine, or something in between, we’ve got you covered!
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Our website features a wide variety of dishes from local and international cuisines. With just a few clicks, you can browse menus, place an order, and have your food delivered in no time. We’re committed to providing excellent service and ensuring that your dining experience is nothing short of amazing.
          </p>
        </div>

        {/* Founder Section */}
        <div className="col-md-6 mx-auto">
          <div className="card">
            <img
              src={founderImage}
              className="card-img-top"
              alt="Founder"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h4 className="card-title font-weight-bold" style={{ fontSize: '1.5rem' }}>Our Founder</h4>
              <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                John Doe, our founder, started this company with a vision to bring people closer to their favorite meals. With years of experience in the culinary industry, John is passionate about delivering quality food to customers and making it accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h4 className="font-weight-bold text-center" style={{ fontSize: '1.5rem' }}>Why Choose Us?</h4>
          <ul className="list-unstyled mt-3" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            <li>✔ Fast and reliable delivery service.</li>
            <li>✔ Wide range of cuisines and menu options.</li>
            <li>✔ Easy and user-friendly online ordering process.</li>
            <li>✔ Quality food from top restaurants and chefs.</li>
            <li>✔ Friendly and efficient customer support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
