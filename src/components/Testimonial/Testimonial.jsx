import React from 'react';
import foodImage1 from '../../assets/Testimonial1.jpg'; // Import your static food images
import foodImage2 from '../../assets/Testimonial2.jpg'; // Import your static food images
import foodImage3 from '../../assets/Testimonial3.jpg'; // Import your static food images
import foodImage4 from '../../assets/Testimonial4.jpg'; // Import your static food images
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'; // Import left and right arrow icons
import { FaStar } from 'react-icons/fa'; // Import star icon

const Testimonial = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-3">
          {/* Header text above the carousel */}
          <h3 className="mb-2 fs-2 font-weight-bolder">What Our <span className='text-danger'>Customers Say</span></h3>
          <p className="text-start mb-4">
            Our customers love our food delivery service! Here are some of their thoughts and experiences:
            <br />
            "The variety of dishes offered is remarkable, and I can always find something to satisfy my cravings.
            The service is fast, and the delivery personnel are always polite and professional."
          </p>
          <div id="testimonialCarousel" className="carousel bg-light slide shadow-lg p-3 mb-5 rounded" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex align-items-center mb-3 justify-content-center">
                  <img 
                    src="https://avatar.iran.liara.run/public/42" 
                    alt="Customer 1" 
                    className="rounded-circle" 
                    width="50" 
                    height="50" 
                  />
                  <div className="ms-3">
                    <p className="mb-0 text-muted">"I love the food delivery service! The meals are always fresh and delicious."</p>
                    <h6 className="mb-0 font-weight-bolder text-danger">- John Doe</h6>
                    <div>
                      {/* 5-star rating */}
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex align-items-center mb-3 justify-content-center">
                  <img 
                    src="https://avatar.iran.liara.run/public/31" 
                    alt="Customer 2" 
                    className="rounded-circle" 
                    width="50" 
                    height="50" 
                  />
                  <div className="ms-3">
                    <p className="mb-0 text-muted">"Fantastic service! My orders arrive hot and on time every time."</p>
                    <h6 className="font-weight-bolder text-danger mb-0">- Jane Smith</h6>
                    <div>
                      {/* 5-star rating */}
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex align-items-center mb-3 justify-content-center">
                  <img 
                    src="https://avatar.iran.liara.run/public/girl" 
                    alt="Customer 3" 
                    className="rounded-circle" 
                    width="50" 
                    height="50" 
                  />
                  <div className="ms-3">
                    <p className="mb-0 text-muted">"Great experience! Highly recommend for anyone craving good food."</p>
                    <h6 className="font-weight-bolder text-danger mb-0">- Mike Johnson</h6>
                    <div>
                      {/* 5-star rating */}
                      <FaStar  className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                      <FaStar className='text-danger ' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Arrow buttons for testimonials */}
          <div className="text-start mt-3">
            <div className="d-flex justify-content-start">
              <button className="btn border border-danger rounded p-2 me-2" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <BsArrowLeft style={{ color: 'black' }} />
              </button>
              <button className="btn border border-danger rounded p-2" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <BsArrowRight style={{ color: 'black' }} />
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <img 
                src={foodImage1} 
                alt="Delicious food 1" 
                className="img-fluid rounded mb-3" 
              />
            </div>
            <div className="col-6">
              <img 
                src={foodImage2} 
                alt="Delicious food 2" 
                className="img-fluid rounded mb-3" 
              />
            </div>
            <div className="col-6">
              <img 
                src={foodImage3} 
                alt="Delicious food 3" 
                className="img-fluid rounded mb-3" 
              />
            </div>
            <div className="col-6">
              <img 
                src={foodImage4} 
                alt="Delicious food 4" 
                className="img-fluid rounded mb-3" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
