
// import and require expressjs & mysql2
const express = require("express");
const mysql = require("mysql2");


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const connection = mysql.createConnection(
    {
    host: "localhost",
    // MYSQL username
    user: 'root',
    // mySQL password here
    password: "Houghton@19",
    database: "employee_db"  
    },
    console.log(`Connected to the employee_db Database.`)
);


// write app.listen () to starts server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);

module.exports = connection;