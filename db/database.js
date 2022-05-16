
// import and require  connection.js

const connection = require("../config/connection");

//Creating constructor function

class Database {
    constructor(connection) {
        this.connection = connection;
    };

    // to have list of all employees 
    viewAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    };

    // to have list of all managers
    // findAllManagers(employeeId) {
    //     return this.connection.query("SELECT id, first_name, last_name FROM employee WHERE id")
    //     employeeId;
    // };

}


module.exports = Database;
