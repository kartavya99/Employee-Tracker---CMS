
// import and require expressjs & mysql2
const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const connection = mysql.createConnection(
    {
    host: "localhost",
    // MYSQL username
    user: process.env.DB_USER,
    // mySQL password here
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    },
    console.log(`Connected to the employee_db Database.`)
);


// write app.listen () to starts server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);

module.exports = connection;