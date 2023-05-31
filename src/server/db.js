// Credentials, these should be authenticated and never stored on git!
const mysql = require('mysql2')
const db = mysql.createConnection({
host: "98.59.242.200",
user: "Rowan",
password: "Risky#02",
database:"woorowan_db"
})

module.exports = db;