import React, { useState } from 'react';
import axios from 'axios';

const VehicleIntake = () => {
  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    vid: '',
    vehicleClass: '',
    color: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend API
    axios
      .post('http://localhost:3001/api/vehicleintake', formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data); // For example, you can log the response or perform any other actions
        // Reset the form after successful submission
        setFormData({
          year: '',
          make: '',
          model: '',
          vid: '',
          vehicleClass: '',
          color: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting vehicle form:', error);
        // Handle the error, display an error message, etc.
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <p>Vehicle Info</p>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          id="make"
          name="make"
          value={formData.make}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="vid">VID:</label>
        <input
          type="text"
          id="vid"
          name="vid"
          value={formData.vid}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="vehicleClass">Class:</label>
        <input
          type="text"
          id="vehicleClass"
          name="vehicleClass"
          value={formData.vehicleClass}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default VehicleIntake;
