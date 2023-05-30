


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

// Define a route for fetching invoices from MySQL
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
