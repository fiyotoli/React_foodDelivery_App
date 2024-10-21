// src/pages/Checkout/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext'; // Adjust path as necessary
import { Link } from 'react-router-dom'; // Adjust path as necessary

const Checkout = () => {
    const { cart, getTotalAmount } = useCart(); // Access cart and total amount from context

    // State to manage alerts and form data
    const [alert, setAlert] = useState({ message: '', type: '' }); // State for alerts
    const [formData, setFormData] = useState({}); // State to hold payment form data

    // Calculate the total quantity and price
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = getTotalAmount().toFixed(2); // Calculate the total price of all items

    // Handle product information submission
    const handlePayment = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setAlert({ message: '', type: '' }); // Clear previous alerts when starting a new payment attempt

        // Here you can add your payment handling logic if needed

        setAlert({ message: "Payment initiated!", type: 'success' }); // Alert for successful payment initiation
    };

    // Function to handle changes in payment form inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value })); // Update the form data state
    };

    // Effect to handle alert display
    useEffect(() => {
        if (alert.message) {
            const timer = setTimeout(() => setAlert({ message: '', type: '' }), 3000); // Clear alert after 3 seconds
            return () => clearTimeout(timer); // Cleanup timer on unmount
        }
    }, [alert]);

    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-center">Checkout</h2>
            {alert.message && (
                <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                </div>
            )}
            {cart.length === 0 ? (
                <p>Your cart is empty. Please add items to your cart before proceeding to checkout.</p>
            ) : (
                <div>
                    {/* Products Table */}
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4>Total Amount: ${totalPrice}</h4>
                    <h4>Total Quantity: {totalQuantity}</h4>

                    {/* Payment Section */}
                    <div className="shadow p-4 mt-4 rounded">
                        <h5 className="text-center">Fill Your Information</h5>
                        <form onSubmit={handlePayment}>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-2 mb-2 mb-2 ">
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        className="form-control"
                                        value={formData.fullName || ''} // Default to empty string
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        value={formData.phoneNumber || ''} // Default to empty string
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-2 ">
                                    <input
                                        type="text"
                                        name="place"
                                        placeholder="Place"
                                        className="form-control"
                                        value={formData.place || ''} // Default to empty string
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <input
                                        type="text"
                                        name="transactionId"
                                        placeholder="Transaction ID"
                                        className="form-control"
                                        value={formData.transactionId || ''} // Default to empty string
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-2">
                                    <input
                                        type="text"
                                        name="houseNumber"
                                        placeholder="House Number"
                                        className="form-control"
                                        value={formData.houseNumber || ''} // Default to empty string
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <input
                                        type="text"
                                        name="amount"
                                        placeholder="Amount Paid"
                                        className="form-control"
                                        value={formData.amount || ''} // Default to empty string
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-success mb-3">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Buttons Section */}
                    <div className="d-flex mt-4">
                        <Link to="/cart">
                            <button className="btn btn-danger me-2">Back to Cart</button>
                        </Link>
                        <Link to="/order">
                            <button className="btn btn-success">Check Your Order</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
