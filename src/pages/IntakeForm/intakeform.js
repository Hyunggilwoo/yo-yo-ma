import React, { useState } from 'react';
import './styles.css';
import CustomerIntake from './CustomerIntake/customerintake';
import VehicleIntake from './VehicleIntake/vehicleintake';

const IntakeForm = () => {
  const [customer, setCustomer] = useState({});
  const [vehicle, setVehicle] = useState({});

  const handleCustomerSubmit = async (customerData) => {
    // Send the customer data to the backend API
    try {
      const response = await fetch('/api/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Customer form submitted successfully:', data);
        setCustomer(data); // Update the customer state if needed
      } else {
        console.error('Error submitting customer form:', response.status);
      }
    } catch (error) {
      console.error('Error submitting customer form:', error);
    }
  };

  const handleVehicleSubmit = async (vehicleData) => {
    // Send the vehicle data to the backend API
    try {
      const response = await fetch('/api/vehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Vehicle form submitted successfully:', data);
        setVehicle(data); // Update the vehicle state if needed
      } else {
        console.error('Error submitting vehicle form:', response.status);
      }
    } catch (error) {
      console.error('Error submitting vehicle form:', error);
      
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
