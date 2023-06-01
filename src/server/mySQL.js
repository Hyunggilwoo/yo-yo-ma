


const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 3001; // Choose a suitable port number


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

// Define a route for fetching info from MySQL
app.get('/api/invoices', (req, res) => {
  // put the SQL statement here.
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

// // Define a route for fetching invoices from MySQL
// app.get('/api/invoices', (req, res) => {
//   // put the SQL statement here.
//   const query = 'SELECT * FROM invoiceregistry';
//   db.query(query, (error, results) => {
//     if (error) {
//       console.error('Error fetching invoices from MySQL:', error);
//       res.status(500).json({ error: 'Error fetching invoices' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// Define a route for adding customer information on MySQL
app.post('CustomerLookup', (req, res) => {
  const { firstName, lastName } = req.body;

  const query = 'INSERT INTO customerregistry (firstName, lastName) VALUES (?, ?)';
  const values = [firstName, lastName];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error('Error adding customer information to MySQL:', error);
      res.status(500).json({ error: 'Error adding customer information' });

    } else {
      res.json({ message: 'Customer information added successfully'});
      console.log("Customer added successfullY"); // printing it
    }
  })
});

// Define a route for retrieving customer information from MySQL
app.get('/api/customerlookup', (req, res) => {
  const {firstName, lastName } = req.query;

  const query = 'SELECT * FROM customerRegistry as c WHERE c.First_Name = ? AND c.Last_Name = ?';
  const values = [firstName, lastName];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error retrieving customer information from MySQL:', error);
      res.status(500).json({ error: 'Error retrieving customer information' });

    } else {
      res.json(results);
    }
  })
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
