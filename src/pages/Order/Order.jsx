// src/pages/Order/Order.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Order = () => {
    // Sample order data (replace with actual data from your state management or API)
    const orders = [
        {
            id: '001',
            items: ['Pizza', 'Pasta', 'Salad'],
            total: 29.99,
            date: '2024-10-01',
        },
        {
            id: '002',
            items: ['Burger', 'Fries'],
            total: 15.49,
            date: '2024-10-05',
        },
        {
            id: '003',
            items: ['Sushi', 'Miso Soup'],
            total: 22.00,
            date: '2024-10-10',
        },
    ];

    // Function to handle deleting an order (replace with actual delete logic)
    const handleDelete = (id) => {
        console.log(`Delete order with ID: ${id}`);
        // Implement delete logic here
    };

    return (
        <div className="container mt-5 py-5">
            <h2 className="text-center">Order <span className='text-danger'>History</span> </h2>
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="list-group">
                        {orders.map(order => (
                            <div 
                                key={order.id} 
                                className="list-group-item list-group-item-action shadow-sm mb-3"
                            >
                                <h5 className="mb-1">Order ID: {order.id}</h5>
                                <p className="mb-1"><strong>Items:</strong> {order.items.join(', ')}</p>
                                <p className="mb-1"><strong>Total Amount:</strong> ${order.total.toFixed(2)}</p>
                                <p className="mb-1"><strong>Date:</strong> {order.date}</p>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                    onClick={() => handleDelete(order.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
