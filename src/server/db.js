// Credentials, these should be authenticated and never stored on git!
const mysql = require('mysql2')
const db = mysql.createConnection({
host: "localhost",
user: "Rowan",
password: "Risky#02",
database:"woorowan_db"
})

module.exports = db;