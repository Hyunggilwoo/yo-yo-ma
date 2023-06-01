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
    fetch(`http://localhost:3001/api/invoicesID/${invoice['Invoice#']}`) // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => setSelectedInvoice(data))
      .catch((error) => {
        console.error('Error fetching invoice details:', error);
        setSelectedInvoice(null);
      });
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
            <p>
              Customer Name: {selectedInvoice.customer.First_Name}{' '}
              {selectedInvoice.customer.Last_Name}
            </p>
            {/* Render other customer information fields */}
          </div>
          <div>
            <h2>Owned Vehicle Information</h2>
            <p>Year: {selectedInvoice.vehicle.Year}</p>
            {/* Render other vehicle information fields */}
          </div>
          <div>
            <h2>Billing Details</h2>
            {selectedInvoice.billing.map((bill) => (
              <div key={bill['Part#']}>
                <p>Part#: {bill['Part#']}</p>
                <p>Description: {bill.Description}</p>
                {/* Render other billing information fields */}
              </div>
            ))}
          </div>
          <div>
            <h2>Total</h2>
            <p>{selectedInvoice.invoice.total}</p>
          </div>
          <button onClick={handleInvoiceClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Invoice;
