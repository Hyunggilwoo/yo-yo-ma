import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/invoices') // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => setInvoices(data))
      .catch((error) => {
        console.error('Error fetching invoices:', error);
      });
  }, []);

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
                  <Link to={`/invoices/${invoice['Invoice#']}`}>
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default Invoice;
