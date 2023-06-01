import React from 'react';
import BuildTicket from './buildtickets';

const Tickets = ({ tickets, onBuildTicket }) => {
  const handleBuildTicketClick = () => {
    onBuildTicket();
  };

  return (
    <div className="page-container">
      {tickets.length > 0 ? (
        <div>
          <h2>Submitted Forms:</h2>
          <ul>
            {tickets.map((ticket, index) => (
              <li key={index}>
                First Name: {ticket.firstName}, Last Name: {ticket.lastName}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>ADD TICKETS!</p>
          <button onClick={handleBuildTicketClick}>Build Ticket</button>
        </div>
      )}

      <BuildTicket />
    </div>
  );
};

export default Tickets;
