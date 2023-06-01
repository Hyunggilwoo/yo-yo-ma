import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerLookup = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/customerlookup') // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => {
        console.error('Error fetching customers:', error);
      });
  }, []);

  return (
    <div>
      <header className="styled">
        <h1>Customers</h1>
        <table>
          <thead>
            <tr>
              <th>CID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th> {/* Add a new column for actions */}
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.CID}>
                <td>{customer.CID}</td>
                <td>{customer.First_Name}</td>
                <td>{customer.Last_Name}</td>
                <td>{customer.Phone}</td>
                <td>{customer.Email}</td>
                <td>
                  <Link to={`/customers/${customer.CID}`}>
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Link to="/IntakeForm">
            <button>Add new Customer</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default CustomerLookup;
