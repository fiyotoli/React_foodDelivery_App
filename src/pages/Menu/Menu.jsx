import React, { useState } from 'react';
import { Card, Button, Dropdown, Form } from 'react-bootstrap';
import menuData from '../../assets/menu.js';
import { BsFillFilterCircleFill } from 'react-icons/bs'; // For dropdown icon
import { FiSearch } from 'react-icons/fi'; // For search icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Menu = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the menu items based on selected criteria
  const filteredData = menuData.filter((food) => {
    const matchesCategory =
      !selectedCategory || food.category === selectedCategory;
    const matchesPrice =
      !priceRange ||
      (priceRange === 'low' && food.price >= 50 && food.price <= 60) ||
      (priceRange === 'medium' && food.price >= 70 && food.price <= 150) ||
      (priceRange === 'high' && food.price > 150);
    const matchesSearch =
      food.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Inline styles
  const cardStyle = {
    height: '100%', // Makes the card fill the available height
    transition: 'box-shadow 0.3s ease', // Smooth transition for shadow effect
    cursor: 'pointer', // Pointer cursor on hover
    overflow: 'hidden', // Ensures overflow is hidden when image scales
    position: 'relative', // Allows for positioning category label
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect for cards
  };

  const imageStyle = {
    height: '200px', // Set a fixed height for the image
    objectFit: 'cover', // Ensures the image covers the area
    transition: 'transform 0.3s ease', // Smooth transition for hover effect on the image
    transform: 'scale(0.95)', // Default zoom-out scale
  };

  const categoryStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(220, 53, 69, 0.1)', // Danger color (red) with opacity 10%
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
  };

  const priceStyle = {
    backgroundColor: 'rgba(0, 123, 255, 0.1)', // Different color for price with opacity 10%
    padding: '5px',
    borderRadius: '5px',
    fontWeight: 'bold',
  };

  const searchInputStyle = {
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Shadow effect for search input
    borderRadius: '4px', // Rounded corners
    padding: '8px', // Padding inside the input
    width: '100%', // Full width for search input
  };

  // Function to handle viewing details
  const handleViewDetails = (foodId) => {
    navigate(`/menu-detail/${foodId}`);
  };

  return (
    <div className="container mt-5 pt-5">
      {/* Filter section */}
      <div className="row mb-4 mt-3">
        <div className="col-md-6 mx-auto mb-3"> {/* Centering the search input */}
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchInputStyle} // Apply inline style for shadow
          />
        </div>
      </div>
      <div className="row mb-4 d-flex justify-content-end">
        <div className="col-auto mx-2">
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              <BsFillFilterCircleFill /> Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedCategory('')}>
                All Categories
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedCategory('Doro Wot')}>
                Dorowet
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedCategory('Shiro')}>
                Shiro
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedCategory('Tere')}>
                Tere
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedCategory('Gomen')}>
                Gomen
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedCategory('Tibs')}>
                Tibs
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedCategory('Firfir')}>
                Firfir
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-auto">
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="price-dropdown">
              Price Range
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setPriceRange('')}>
                All Prices
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPriceRange('low')}>
                50 - 60 ETB
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPriceRange('medium')}>
                70 - 150 ETB
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPriceRange('high')}>
                Above 150 ETB
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="row">
        {filteredData.length === 0 ? ( // Check for empty results
          <div className="text-center">No items found.</div>
        ) : (
          filteredData.map((food) => (
            <div className="col-md-6 col-lg-4 col-lg-4 mb-4" key={food.id}>
              <Card style={cardStyle}>
                <Card.Img
                  variant="top"
                  src={food.image}
                  style={imageStyle}
                  className="image-hover" // Add a class for hover effect
                />
                <div style={categoryStyle} className='bg-danger bg-opacity-50 text-white '>{food.category}</div> {/* Category name in top right corner */}
                <Card.Body>
                  <Card.Title className=' lead'>{food.title}</Card.Title>
                  <Card.Text>
                    <strong style={priceStyle}>{food.price} ETB</strong> {/* Updated to display price in ETB */}
                  </Card.Text>
                  <Button variant="danger" style={{ borderRadius: '50px' }} onClick={() => handleViewDetails(food.id)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>

      {/* Adding style for image hover effect using JavaScript */}
      <style jsx>{`
        .image-hover {
          transform: scale(0.95); /* Initial zoom out effect */
        }

        .image-hover:hover {
          transform: scale(1.1); /* Scale up to slightly larger than original on hover */
        }
      `}</style>
    </div>
  );
};

export default Menu;
