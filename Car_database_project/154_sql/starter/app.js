/*
 * API for a theoretical cafe.
 *
 * An API that can provide items from the cafe menu,
 * and submit cafe orders for processing.
 * *** Endpoint Documentation ***
 * Endpoint: /menu
 * Description: Provides all items on the menu, sorted into categories.
 *              Items within each category are in alphabetical order.
 * Request Type: GET
 * Response Type: JSON
 * Example Request: /menu
 * Example Response:
 *  {
 *   'Bakery': [
 *     {
 *       'name': 'Blueberry Scone',
 *       'subcategory': 'Scones',
 *       'price': 3.50
 *     },
 *     ...
 *   ],
 *   ...
 *  }
 * *************************************
 * Endpoint: /menu/:category
 * Description: Responds with an alphebetically sorted list of menu items in the :category.
 * Request Type: GET
 * Response Type: JSON
 * Example Request: /menu/Bakery
 * Example Response:
 *  [
 *    {
 *      'name': 'Blueberry Scone',
 *      'subcategory': 'Scones',
 *      'price': 3.50
 *    },
 *    ...
 *  ]
 * Error Handling: If there are no items for the given category, responds in text with 400 status.
 */

'use strict';

const express = require('express');
const app = express();

const INVALID_PARAM_ERROR = 400;
const SEVER_ERROR = 500;
const SERVER_ERROR_MSG = 'Something went wrong on the server.';

// TODO: Implement /menu. Gets all menu items, organized by category and in alphabetical order.

// TODO: Implement /menu/:category. Gets all menu items in a given :category in alphabetical order.

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'mydb',
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
  
  con.query('SELECT * FROM myTable', (err, results) => {
    if (err) throw err;
    console.log(results);
  });
});

con.end((err) => {
  if (err) throw err;
  console.log('Connection terminated gracefully');
});



const PORT = process.env.PORT || 8000;
app.listen(PORT);