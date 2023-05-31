import React, { useState } from 'react';
import Tickets from './BuildTicket/tickets';
import BuildTicket from './BuildTicket/buildtickets';

const OpenTickets = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [tickets, setTickets] = useState([]);

  const handleBuildTicket = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleTicketSubmit = (newTicket) => {
    setTickets((prevTickets) => [...prevTickets, newTicket]);
    setShowPopup(false);
  };

  const onBuildTicket = () => {
    handleBuildTicket();
  };

  return (
    <div>
      <header className="styled">
        <p>OpenTickets</p>
        <Tickets tickets={tickets} onBuildTicket={onBuildTicket} />
      </header>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <BuildTicket onTicketSubmit={handleTicketSubmit} />
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenTickets;
