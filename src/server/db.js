// Credentials, these should be authenticated and never stored on git!
const mysql = require('mysql2')
const db = mysql.createConnection({
host: "localhost",
user: "admin",
password: "password",
database:"yourdb"
})

module.exports = db;