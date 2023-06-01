import React, { useState } from 'react';

const VehicleIntake = ({ handleSubmit }) => {
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
    handleSubmit(formData); // Pass the form data to the parent component for submission
    setFormData({
      year: '',
      make: '',
      model: '',
      vid: '',
      vehicleClass: '',
      color: '',
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
