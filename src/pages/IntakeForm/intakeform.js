import React, { useState } from 'react';
import './styles.css';

const IntakeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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
          firstName,
          lastName,
        }),
      });

      // Clear the form
      setFirstName('');
      setLastName('');

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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
};

export default IntakeForm;
