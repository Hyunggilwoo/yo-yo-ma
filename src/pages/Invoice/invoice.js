import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/invoices') // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => setInvoices(data))
      .catch((error) => {
        console.error('Error fetching invoices:', error);
      });
  }, []);

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleInvoiceClose = () => {
    setSelectedInvoice(null);
  };

  return (
    <div>
      <header className="styled">
        <h1>Invoices</h1>
        <table>
          <thead>
            <tr>
              <th>Invoice#</th>
              <th>VID</th>
              <th>CID</th>
              <th>Total</th>
              <th>Actions</th> {/* Add a new column for actions */}
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice['Invoice#']}>
                <td>{invoice['Invoice#']}</td>
                <td>{invoice['VID']}</td>
                <td>{invoice['CID']}</td>
                <td>{invoice['total']}</td>
                <td>
                  <button onClick={() => handleInvoiceClick(invoice)}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>

      {selectedInvoice && (
        <div>
          <h1>Invoice Details</h1>
          <div>
            <h2>Customer Information</h2>
            <p>Customer Name: {selectedInvoice.customerName}</p>
            <p>Phone: {selectedInvoice.phone}</p>
            <p>Email: {selectedInvoice.email}</p>
            {/* Render other customer information fields */}
          </div>
          <div>
            <h2>Owned Vehicle Information</h2>
            <p>Year: {selectedInvoice.vehicleYear}</p>
            <p>Make: {selectedInvoice.vehicleMake}</p>
            <p>Model: {selectedInvoice.vehicleModel}</p>
            {/* Render other vehicle information fields */}
          </div>
          <div>
            <h2>Job Details</h2>
            {/* Render job information fields */}
          </div>
          <div>
            <h2>Parts Details</h2>
            {/* Render parts information fields */}
          </div>
          <div>
            <h2>Total</h2>
            <p>{selectedInvoice.total}</p>
          </div>
          <button onClick={handleInvoiceClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Invoice;
