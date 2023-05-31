import React, { useState } from 'react';
import CustomerLookup from '../../Customer Lookup/customerlookup';

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
        <CustomerLookup />
      </div>
    </div>
  );
};

export default BuildTicket;
