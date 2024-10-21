import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import menuData from '../../assets/menu.js';
import { useCart } from '../../context/CartContext';
import { Card, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster

const MenuDetail = () => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Fetch food item based on ID whenever the ID changes
  useEffect(() => {
    const item = menuData.find(food => food.id === parseInt(id));
    setFoodItem(item);
  }, [id]);

  if (!foodItem) {
    return <div>Food item not found!</div>;
  }

  // Fetch related foods based on category
  const relatedFoods = menuData.filter(food => food.category === foodItem.category && food.id !== foodItem.id);

  // Handle adding to cart
  const handleAddToCart = () => {
    addToCart(foodItem);
    toast.success(`${foodItem.title} has been added to your cart!`, {
      position: 'top-right',
    }); // Replace alert with toast
  };

  // Handle viewing details with smooth scroll
  const handleViewDetails = (foodId) => {
    navigate(`/menu-detail/${foodId}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className="container mt-5 pt-5">
      {/* Toaster to show toast notifications */}
      <Toaster />

      <div className="row">
        <div className="col-md-6 position-relative">
          <img
            src={foodItem.image}
            alt={foodItem.title}
            className="img-fluid"
            style={{ height: 'auto', width: "100%", objectFit: 'cover' }}
          />
          <span className="position-absolute top-0 start-0 m-3 bg-danger bg-opacity-50 text-white p-2 rounded">
            {foodItem.category}
          </span>
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">{foodItem.title}</h2>
          <div className="bg-danger bg-opacity-10 p-3 mb-3 rounded" style={{ display: 'inline-block' }}>
            <strong>Price:</strong> ${foodItem.price}
          </div>
          <p className='lead'><strong>Description:</strong> {foodItem.description}</p>

          <button className="btn btn-danger me-2" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <Link to="/menu" className="btn border-danger text-danger">
            Back to Menu
          </Link>
        </div>
      </div>

      <h3 className="mt-4">Related Products</h3>
      <div className="row">
        {relatedFoods.length > 0 ? (
          relatedFoods.map(food => (
            <div className="col-md-3 mb-4" key={food.id}>
              <Card style={{ borderRadius: '10px' }}>
                <Card.Img
                  variant="top"
                  src={food.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                  className="image-hover"
                />
                <div className='bg-danger bg-opacity-50 text-white p-2' style={{ position: 'absolute', top: '10px', right: '10px', borderRadius: '5px' }}>
                  {food.category}
                </div>
                <Card.Body>
                  <Card.Title className='lead'>{food.title}</Card.Title>
                  <Card.Text>
                    <strong className='bg-primary bg-opacity-10 rounded p-1 px-2' style={{ display: 'inline-block' }}>${food.price}</strong>
                  </Card.Text>
                  <Button variant="danger" style={{ borderRadius: '50px' }} onClick={() => handleViewDetails(food.id)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default MenuDetail;
