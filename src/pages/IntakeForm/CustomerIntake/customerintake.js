import React, { useState } from 'react';
import axios from 'axios';

const CustomerIntake = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '', // Changed from 'message' to 'phone'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend API using axios
    axios.post('http://localhost:3001/api/customerintake', formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data); // For example, you can log the response or perform any other actions
      })
      .catch((error) => {
        console.error('Error submitting customer form:', error);
        // Handle the error, display an error message, etc.
      });

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Customer Info</p>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <textarea
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerIntake;
