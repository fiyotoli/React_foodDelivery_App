import React from 'react';
import { useCart } from '../../context/CartContext'; // Adjust path as necessary
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'; // Importing toast and Toaster

const Cart = () => {
    const { cart, getTotalAmount, addToCart, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
        toast.error('Item removed from cart!', {
            position: 'top-right',
        });
    };

    const handleIncreaseQuantity = (item) => {
        addToCart(item);
        toast.success(`${item.title} has been added to your cart!`, {
            position: 'top-right',
        }); // Replace alert with toast
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            removeFromCart(item.id, true);
        } else {
            handleRemove(item.id);
        }
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="container mt-5 pt-5">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.image} alt={item.title} style={{ height: '100px', width: '100px', objectFit: 'cover' }} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-outline-secondary mx-1" onClick={() => handleDecreaseQuantity(item)}>
                                                    <FaMinus />
                                                </button>
                                                {item.quantity}
                                                <button className="btn btn-outline-secondary mx-1" onClick={() => handleIncreaseQuantity(item)}>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4>Total Quantity: {totalQuantity}</h4>
                    <h4>Total Amount: ${getTotalAmount().toFixed(2)}</h4>
                    <div className="d-flex mt-3">
                        <button className="btn btn-success me-3" onClick={handleCheckout}>
                            Checkout
                        </button>
                        <button className="btn btn-danger" onClick={() => navigate('/menu')}>
                            Back to Menu
                        </button>
                    </div>
                </div>
            )}
            <Toaster /> {/* Ensure the Toaster is included */}
        </div>
    );
};

export default Cart;
