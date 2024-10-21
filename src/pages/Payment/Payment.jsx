import React from 'react';
import { Link } from 'react-router-dom'; // Adjust path as necessary

const Payment = ({ formData = {}, handleChange }) => {
    return (
        <div className="container pt-5 mt-5">
            {/* Transaction Instructions */}
            <div className="transaction-info mt-4 text-center" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h5>Make Your Payment</h5>
                <p>
                    Please make the transaction through the following account details:
                </p>
                <p>
                    <strong>Account Number:</strong> 123-456-7890<br />
                    <strong>Account Name:</strong> Your Business Name
                </p>
            </div>

            {/* Form Section */}
            <div className="shadow p-4 mt-4 rounded">
                <h5 className="text-center">Fill Your Information</h5>
                <form>
                    <div className="row mb-3">
                        <div className="col-md-6">
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
                        <div className="col-md-6">
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
                        <div className="col-md-6">
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
                        <div className="col-md-6">
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
                        <div className="col-md-6">
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
                        <div className="col-md-6">
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
            <div className="d-flex mt-4 justify-content-between">
                <Link to="/order">
                    <button className="btn btn-secondary">Check Your Order</button>
                </Link>
            </div>
        </div>
    );
};

export default Payment;
