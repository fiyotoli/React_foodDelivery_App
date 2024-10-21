import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail(''); // Clear the input after submission
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="container-fluid mt-5 bg-light py-4">
      <div className="row justify-content-center ">
      <h2 className="text-center mb-4 font-weight-bolder">Subscribe <span className='text-danger'>to our Newsletter</span></h2>

      <p className="text-center col-10">
          Stay updated with the latest news and promotions from our food delivery service.
          </p>

        <div className="col-md-6">
          
          {/* Added paragraphs here */}
         
          

          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-danger" type="submit">
                Subscribe
              </button>
            </div>
          </form>
          {message && <p className="text-center mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
