
// import and require  connection.js

const connection = require("../config/connection");

//Creating constructor function

class Database {
    constructor(connection) {
        this.connection = connection;
    };

    // to have list of all departments
    viewAllDept () {
        return this.connection.promise().query("SELECT department_name FROM department")
    };


    // to have list of roles
    viewAllRoles(){
        return this.connection.promise().query("SELECT title FROM role_table")
    };

    // to have list of all employees 
    viewAllEmployees() {
        return this.connection.promise().query("SELECT * FROM employee")
    };

    // to have list of all managers
    viewAllManagers(employeeId) {
        return this.connection.promise().query("SELECT id, first_name, last_name FROM employee WHERE employee.manager_id IS NULL", employeeId)
        
    };

    // to add department
    addAllDept(department) {
        return this.connection.promise().query(`INSERT INTO department (department_name) VALUES (?) `,  department , (err, result) => { 
            if (err) {
                console.log(err);
            }
            console.log(result);
        })               
    };    

    // to add a role/ job title
    addAllrole(role) {
        return this.connection.promise().query(`INSERT INTO role_table (title) VALUES (?) ` , role , (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        })
    };


};




module.exports = new Database(connection);
