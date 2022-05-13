
const inquirer = require("inquire");
const figlet = require("figlet");
const mysql = require("mysql2");




// Figlet application name
figlet("Employee \n \n Tracker", (err, data) => {
    if(err) throw err;
    console.log(data);
});