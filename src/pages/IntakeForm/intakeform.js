import React, { useState } from 'react';
import './styles.css';
import CustomerIntake from './CustomerIntake/customerintake';

const IntakeForm = () => {
  const [customer, setCustomer] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };

  const handleVehicleChange = (event) => {
    setVehicle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to the backend API
      await fetch('/server/mySQL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer,
          vehicle,
        }),
      });

      // Clear the form
      setCustomer('');
      setVehicle('');

      // Display a success message or perform any other actions
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error, display an error message, etc.
    }
  };

  return (
    <div>
      <header className="styled">
        <p>Intake</p>
        <CustomerIntake/>
        
      </header>
    </div>
  );
};

export default IntakeForm;
