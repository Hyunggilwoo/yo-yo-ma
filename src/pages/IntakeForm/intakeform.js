import React, { useState } from 'react';
import axios from 'axios'; 
import './styles.css';
import CustomerIntake from './CustomerIntake/customerintake';
import VehicleIntake from './VehicleIntake/vehicleintake';

const IntakeForm = () => {


  const handleCustomerSubmit = async (customerData) => {
    // Send the customer data to the backend API
    axios.post('http://localhost:3000/api/customerlookup', {
      firstName: customerData.firstName,
      lastName: customerData.lastName,
      email: customerData.email,
      message: customerData.message
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    // try {
    //   await fetch('/server/mySQL/customer', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(customerData),
    //   });
    //   // Clear the form or perform any other actions
    //   console.log('Customer form submitted successfully');
    // } catch (error) {
    //   console.error('Error submitting customer form:', error);
    //   // Handle the error, display an error message, etc.
    // }
  };

  const handleVehicleSubmit = async (vehicleData) => {
    // Send the vehicle data to the backend API
    try {
      await fetch('/server/mySQL/vehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleData),
      });
      // Clear the form or perform any other actions
      console.log('Vehicle form submitted successfully');
    } catch (error) {
      console.error('Error submitting vehicle form:', error);
      // Handle the error, display an error message, etc.
    }
  };

  return (
    <div>
      <header className="styled">
        <p>Intake</p>
        <CustomerIntake handleSubmit={handleCustomerSubmit} />
        <VehicleIntake handleSubmit={handleVehicleSubmit} />
      </header>
    </div>
  );
};

export default IntakeForm;
