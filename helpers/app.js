
// import and require prompt and connection.js
const promt = require("inquire");
const con = require("../config/connection");

// View all dep, view all roles, view all employee, ,
// Add department, add role, add employee, 
//update employee role and remove employee

function userOption () {
    return inquirer.prompt([
        {
            name: "optionTree",
            message: 'Please use the arrow keys to select the options',
            type: "list",
            choices : 
            [   
                "View all Departments",
                "View all Roles",
                "View all Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",
                "Remove an Employee",
                "Exit"
            ]
        }
    ])
};

function addDepartment () {
    return inquirer.prompt([
        {
            name: "DepName",
            message: "Please enter the name of the department",
            type: "input"
        }
    ])
};