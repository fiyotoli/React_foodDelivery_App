import React, { useState } from 'react';
import Shiro from '../../assets/Shiro.jpg'; 
import Gomen from '../../assets/Gomen.jpg';
import tibsImage from '../../assets/tibs.jpg';
import firfirImage from '../../assets/firfir.jpg';
import tereImage from '../../assets/tere.jpg';
import doroWotImage from '../../assets/dorowet.jpg';
import menuData from '../../assets/menu'; // Import the menu data
import 'bootstrap/dist/css/bootstrap.min.css';

const categoryImages = {
  Gomen: Gomen,
  Shiro: Shiro,
  Tibs: tibsImage,
  Firfir: firfirImage,
  Tere: tereImage,
  'Doro Wot': doroWotImage,
};

const MenuCards = () => {
  const [filteredData, setFilteredData] = useState(menuData);
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to filter the menu items by category
  const filterItems = (category) => {
    const filtered = menuData.filter(item => item.category === category);
    setFilteredData(filtered);
  };

  // Function to toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 font-weight-bolder">Our <span className='text-danger'>Menu</span></h2>
       <div className="row mb-4">
        {/* Image Filters */}
        {Object.keys(categoryImages).map(category => (
          <div key={category} className=" col-6 col-md-3 col-lg-2">
            <div className="text-center mb-2">
              <div
                className="bg-light p-2 rounded shadow-lg"
                style={{ display: 'inline-block', transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.classList.remove('bg-light') || e.currentTarget.classList.add('bg-white')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('bg-white') || e.currentTarget.classList.add('bg-light')}
              >
                <img
                  src={categoryImages[category]}
                  alt={category}
                  className="img-fluid rounded-circle"
                  style={{ 
                    cursor: 'pointer', 
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                  onClick={() => filterItems(category)}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <p className="font-weight-bold">{category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {filteredData.slice(0, isExpanded ? filteredData.length : 9).map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card  d-flex flex-column" style={{ height: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div
                  className="bg-danger text-white p-2 rounded"
                  style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.9 }}
                >
                  {item.category}
                </div>
              </div>
              <div className="card-body  text-left"> {/* Added text-left for alignment */}
                <h5 className="card-title" >
                  <span className=" text-black bg-primary bg-opacity-10 mt-2 py-1 px-1 rounded lead "> {/* Changed text color to black */}
                    {item.title}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-4">
        <button className="btn btn-danger" onClick={toggleExpand}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default MenuCards;
