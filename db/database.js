
// import and require  connection.js

const connection = require("../config/connection");

//Creating constructor function

class Database {
    constructor(connection) {
        this.connection = connection;
    };

    // to have list of all departments
    viewAllDept () {
        return this.connection.promise().query("SELECT * FROM department")
    };


    // to have list of roles
    viewAllRoles(){
        return this.connection.promise().query("SELECT * FROM role_table")     
     };

    // to have list of all employees 
    viewAllEmployees() {
        return this.connection.promise().query("SELECT * FROM employee")
    };

    // to have list of all managers
    viewAllManagers(employeeId) {
        return this.connection.promise().query("SELECT id, first_name, last_name, role_id FROM employee WHERE employee.manager_id IS NULL", employeeId)
        
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
    addAllrole(title, department_name, salary) {
        return this.connection.promise().query(`INSERT INTO role_table (title, department_id, salary) VALUES (?, ?, ?) ` , [title, department_name, salary] , (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        })
    };

    // to add an employee
    addAllEmployee(firstName, lastName, roleId, manager_id) {
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( ? , ? , ?, ? ) ` , [firstName, lastName, roleId, manager_id] , (err, result ) => {
            if (err) {
                console.log(err);
            }
            console.log(result);

        })
    };

    //to update employee
    updateAllEmployee(roleId, id) {
        return this.connection.promise(). query(`UPDATE employee SET role_id = ? where id = ?  `, [roleId, id] , (err, result) => {
            if (err) {
                console.log(err);
            }
                console.log(result);
        })
    };


    // to remove employee
    removeAllEmployee(roleId) {
        return this.connection.promise().query(`DELETE FROM employee where id = ?`, roleId , (err, result) => {
            if (err) {
                console.log(err);
            }
                console.log(result);

        })
    };

    // to remove department
    removeAlldept(department_id) {
        return this.connection.promise().query(`DELETE FROM department where id =? `, department_id, (err, result) => {
            if(err) {
                console.log(err)
            } 
                console.log(result);
        });
    }


    // to remove role 
    removeAllRole(role_id) {
        return this.connection.promise().query(`DELETE FROM role_table where id =?` , role_id, (err, result) => {
            if (err) {
                console.log(err);
            } 
                console.log(result);              
            
        });

    }

    //to view employee by Department 
    viewAllEmployeesByDept() {
        return this.connection.promise(). query(
          `SELECT employee.first_name, employee.last_name, department.department_name AS DEPARTMENT FROM employee JOIN role_table ON employee.role_id = role_table.id JOIN department ON role_table.department_id = department.id ORDER BY department.department_name; `);
        
    };

   
};


module.exports = new Database(connection);
