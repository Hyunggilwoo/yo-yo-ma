import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the invoice data from the backend API
    const fetchInvoiceData = async () => {
      try {
        const response = await fetch(`/api/invoices/${invoiceId}`); // Replace with the actual API endpoint for fetching a specific invoice
        const data = await response.json();
        setInvoice(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching invoice data:', error);
        // Handle the error, display an error message, etc.
        setLoading(false);
      }
    };

    fetchInvoiceData();
  }, [invoiceId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invoice) {
    return <div>No invoice data available.</div>;
  }

  return (
    <div>
      <h1>Invoice Details</h1>
      <div>
        <h2>Customer Information</h2>
        <p>Customer Name: {invoice.customerName}</p>
        <p>Phone: {invoice.phone}</p>
        <p>Email: {invoice.email}</p>
        {/* Render other customer information fields */}
      </div>
      <div>
        <h2>Owned Vehicle Information</h2>
        <p>Year: {invoice.vehicleYear}</p>
        <p>Make: {invoice.vehicleMake}</p>
        <p>Model: {invoice.vehicleModel}</p>
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
        <p>{invoice.total}</p>
      </div>
    </div>
  );
};

export default InvoiceDetails;
