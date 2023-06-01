# Project Overview
Car database is a shop management software, it contains records of service for all customers in a shop. It holds contact information, vehicle information, and keeps track of an invoice of each customer. Our current car database has a capacity to access the database with a specified authentication. As long as you have access to an internet, you and your employees can access the same car database store wherever they are. 

![image](https://github.com/Hyunggilwoo/yo-yo-ma/assets/79225023/3842a0d6-9e3f-4a57-90b8-828a5702f79d)

This current project integrates to a local MySQL Server, although we have the script to connect to a database on Azure Cloud.

## Installation
To connect to the mySQL database, in ./src/server please run:
node mySQL.js 

//please nore that you will need to configure db.js with your mysql login info.

In the project directory, you can run:
### `npm install` 
to install necessary dependencies.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Usage
1. Click "Intake Form" to fill out a customer form and a new vehicle form.
2. Click "Invoices" or "Home" to look at the current invoices.
3. Click "Customer Lookup" to find all of the customers registered in the shop.


### Technology Stack
* Front-end: React.js 
* Back-end: Node.js
* Database: MySQL 

## Review

We currently have a mock page for the "shop services" page and "open page". We would like to integrate more queries to retrieve and put data into our database. 
We would like to integrate Azure Cloud to the database, so that the store database can be accessed fully on the cloud.
