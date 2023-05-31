import React, { useState } from 'react';

const BuildTicket = ({ onTicketSubmit }) => {
  const [ticketFormData, setTicketFormData] = useState({
    firstName: '',
    lastName: '',
    // Add more ticket form fields as needed
  });

  const handleTicketInputChange = (event) => {
    const { name, value } = event.target;
    setTicketFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    // Perform additional processing if needed

    // Create a new ticket object
    const newTicket = {
      firstName: ticketFormData.firstName,
      lastName: ticketFormData.lastName,
      // Include other form field values
    };

    // Call the onTicketSubmit function passed from the parent component
    onTicketSubmit(newTicket);

    // Reset the form fields
    setTicketFormData({
      firstName: '',
      lastName: '',
      // Reset other form field values
    });
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Build a Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={ticketFormData.firstName}
              onChange={handleTicketInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={ticketFormData.lastName}
              onChange={handleTicketInputChange}
            />
          </div>
          {/* Add more form fields as needed */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BuildTicket;
