
// import and require expressjs & mysql2
const express = require("express");
const mysql = require("mysql2");


const PORT = process.env.PORT || 3001;
const app = express();



const connection = mysql.createConnection(
    {
    host: "localhost",
    // MYSQL username
    user: 'root',
    // mySQL password here
    password: "",
    database: "employee_db"  
    },
    console.log(`Connected to the movies_db Database.`)
);

module.exports = connection;