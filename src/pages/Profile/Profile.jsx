// src/pages/Profile/Profile.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import profileImage from '../../assets/profile-image.jpg'; // Import your profile image

const Profile = () => {
    // Example user data (You can replace this with actual user data from your state management or API)
    const user = {
        name: 'Tesfa Y. Tolasa',
        email: 'tesfa@example.com',
        password: '******', // Hide the password in the profile
    };

    return (
        <div className="container mt-5 py-5">
             <div className="row justify-content-center mt-4">
                <div className="col-md-7">
                    <div className="card shadow text-center">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="card-img-top rounded-circle mx-auto mt-3"
                            style={{ width: '150px', height: '150px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text"><strong>Email:</strong> {user.email}</p>
                            <p className="card-text"><strong>Password:</strong> {user.password}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <a href="/edit-profile" className="btn btn-primary me-2">Edit Profile</a>
                        <button className="btn btn-danger">Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
