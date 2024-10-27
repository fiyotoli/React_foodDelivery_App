import React from 'react';
import { FaTruck, FaUtensils, FaConciergeBell, FaHeadset, FaCar, FaPizzaSlice, FaLeaf, FaSmile } from 'react-icons/fa'; // Importing icons

const Service = ({ icon: Icon, title, description, isDanger }) => {
  return (
    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4"> {/* Added mb-4 for bottom margin */}
      <div
        className={`text-center flex-fill ${isDanger ? 'bg-danger text-white shadow' : ''}`} // Add bg-danger and shadow if isDanger is true
        style={{
          backgroundColor: isDanger ? '#dc3545' : '#fff', // Background color for danger card
          padding: '20px', // Added padding to create space
          borderRadius: '10px', // Optional: Add border radius for a rounded look
        }}
      >
        <Icon
          className={isDanger ? 'text-white mb-2' : 'text-danger mb-2'} // Set icon color to white if isDanger
          size={50}
        />
        <h6 className={isDanger ? 'text-white mb-1' : 'text-black mb-1'}>{title}</h6> {/* Set title color to white if isDanger */}
        <p className={isDanger ? 'text-white' : 'text-muted'}>{description}</p> {/* Set description text color to white if isDanger */}
      </div>
    </div>
  );
};

const Section = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 font-weight-bolder"> <span className='text-danger'>Our</span> Services</h2> {/* Header for Our Services */}
      <div className="row">
        <Service 
          icon={FaTruck} 
          title="Fast Delivery" 
          description="Get your food delivered swiftly and securely, right to your door."
        />
        <Service 
          icon={FaUtensils} 
          title="Quality Food" 
          description="We prioritize quality, offering fresh and delicious dishes every time."
        />
        <Service 
          icon={FaConciergeBell} 
          title="24/7 Service" 
          description="Enjoy round-the-clock service to satisfy your cravings any time."
          isDanger={true} // Set third card as danger
        />
        <Service 
          icon={FaHeadset} 
          title="Customer Support" 
          description="Our support team is here to assist you with any inquiries or issues."
        />
        <Service 
          icon={FaCar} 
          title="Convenient Pick-up" 
          description="Pick up your orders at your convenience to save time."
        />
        <Service 
          icon={FaPizzaSlice} 
          title="Variety of Cuisines" 
          description="Choose from a wide range of cuisines to satisfy every taste."
        />
        <Service 
          icon={FaLeaf} 
          title="Fresh Ingredients" 
          description="We use only fresh, high-quality ingredients in all our dishes."
        />
        <Service 
          icon={FaSmile} 
          title="Satisfaction Guaranteed" 
          description="We strive for 100% customer satisfaction with every order."
        />
      </div>
    </div>
  );
};

export default Section;
