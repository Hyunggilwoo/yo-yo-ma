const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

const port = 3001; // Choose a suitable port number
const customerLook = '/api/customerlookup';
const invoices = '/api/invoices';
app.use(cors());
app.use(express.json());

// Establish MySQL connection
db.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define a route for fetching invoices from MySQL
app.get(invoices, (req, res) => {
  const query = 'SELECT * FROM invoiceregistry';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching invoices from MySQL:', error);
      res.status(500).json({ error: 'Error fetching invoices' });
    } else {
      res.json(results);
    }
  });
});

// Define a route for retrieving customer information from MySQL
app.get(customerLook, (req, res) => {
  const query = 'SELECT * FROM customerregistry';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving customer information from MySQL:', error);
      console.error('SQL Query:', query);
      res.status(500).json({ error: 'Error retrieving customer information' });
    } else {
      res.json(results);
    }
  });
});

// Define a route for adding customer information to MySQL
app.post('/api/customerIntake', (req, res) => {
  const { firstName, lastName } = req.body;

  const query = 'INSERT INTO customerregistry (First_Name, Last_Name) VALUES (?, ?)';
  const values = [firstName, lastName];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error('Error adding customer information to MySQL:', error);
      res.status(500).json({ error: 'Error adding customer information' });
    } else {
      res.json({ message: 'Customer information added successfully' });
      console.log('Customer added successfully');
    }
  });
});

// Define a route for adding vehicle information to MySQL
app.post('/api/vehicle', (req, res) => {
  const { Year, Make, Model, VID, Class, Color } = req.body;

  const query =
    'INSERT INTO vehicleregistry (Year, Make, Model, VID, Class, Color) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [Year, Make, Model, VID, Class, Color];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error('Error adding vehicle information to MySQL:', error);
      res.status(500).json({ error: 'Error adding vehicle information' });
    } else {
      res.json({ message: 'Vehicle information added successfully' });
      console.log('Vehicle added successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
