const express = require('express');
const cors = require('cors');
const db = require('./db');
const axios = require('axios'); // Import axios
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
app.post('/api/customerintake', (req, res) => {
  const { firstName, lastName, phone, email } = req.body;

  // Retrieve the last CID from the database
  const getLastCIDQuery = 'SELECT MAX(CID) AS lastCID FROM customerregistry';
  db.query(getLastCIDQuery, (error, results) => {
    if (error) {
      console.error('Error retrieving last CID from MySQL:', error);
      res.status(500).json({ error: 'Error adding customer information' });
    } else {
      // Calculate the next CID as lastCID + 1
      const lastCID = results[0].lastCID;
      const nextCID = lastCID ? lastCID + 1 : 1;

      // Insert the new customer information with the nextCID
      const insertQuery = 'INSERT INTO customerregistry (CID, First_Name, Last_Name, Phone, Email) VALUES (?, ?, ?, ?, ?)';
      const insertValues = [nextCID, firstName, lastName, phone, email];

      db.query(insertQuery, insertValues, (error, result) => {
        if (error) {
          console.error('Error adding customer information to MySQL:', error);
          res.status(500).json({ error: 'Error adding customer information' });
        } else {
          res.json({ message: 'Customer information added successfully' });
          console.log('Customer added successfully');
        }
      });
    }
  });
});



// Define a route for adding vehicle information to MySQL
app.post('/api/vehicleintake', async (req, res) => {
  const { year, make, model, vid, vehicleClass, color } = req.body;
  console.log(req.body);
  const query = 'INSERT INTO vehicleregistry (Year, Make, Model, VID, Class, Color) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [year, make, model, vid, vehicleClass, color];

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

// Define a route for fetching invoice details
app.get('/api/invoices/:invoiceId', (req, res) => {
  const invoiceId = req.params.invoiceId;
  const query = `
    SELECT
      ir.\`Invoice#\`,
      ir.total,
      c.First_Name,
      c.Last_Name,
      v.\`Year\`,
      v.Make,
      v.Model,
      b.\`Part#\`,
      pr.Description,
      pr.\`Cost ($)\`,
      pr.\`Price ($)\`
    FROM
      \`invoiceregistry\` ir
      INNER JOIN \`customerregistry\` c ON ir.CID = c.CID
      INNER JOIN \`vehicleregistry\` v ON ir.VID = v.VID
      INNER JOIN \`billing\` b ON ir.\`Invoice#\` = b.\`Invoice#\`
      INNER JOIN \`partsregistry\` pr ON b.\`Part#\` = pr.\`Part#\`
    WHERE
      ir.\`Invoice#\` = ${invoiceId};
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching invoice details from MySQL:', error);
      res.status(500).json({ error: 'Error fetching invoice details' });
    } else {
      const invoiceData = {
        invoice: {
          'Invoice#': results[0]['Invoice#'],
          total: results[0].total,
        },
        customer: {
          First_Name: results[0].First_Name,
          Last_Name: results[0].Last_Name,
        },
        vehicle: {
          'Year': results[0]['Year'],
          Make: results[0].Make,
          Model: results[0].Model,
        },
        billing: results.map((result) => ({
          'Part#': result['Part#'],
          Description: result.Description,
          'Cost ($)': result['Cost ($)'],
          'Price ($)': result['Price ($)'],
        })),
      };

      res.json(invoiceData);
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
