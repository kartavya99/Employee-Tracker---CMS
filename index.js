
// Import and require inquirer and figlet 
const inquirer = require("inquirer");
const figlet = require("figlet");
// import class Database
const database = require("./db/database");
// require console table
const cTable = require('console.table');
const connection = require("./config/connection");



// Figlet application name
figlet("EMPLOYEE \n \n \n MANAGEMENT \n \n \n SYSTEM ", (err, data) => {
    if(err) throw err;
    console.log(data);

    userOptions();
});


// View all dep, view all roles, view all employee, ,
// Add department, add role, add employee, 
//update employee role and remove employee

function userOptions () {
    return inquirer.prompt([
        {
            name: "optionTree",
            message: 'Please use the arrow keys to select the options',
            type: "list",
            choices : 
            [   
                "1- View all Departments",
                "2 -View all Roles",
                "3- View all Employees",
                "4 - View all Managers",
                "5 - Add a Department",
                "6- Add a Role",
                "7- Add an Employee",
                "8- Update an Employee Role",
                "9- Remove an Employee",
                "10- Exit"
            ]
        }
    ])
    .then((answer) => {
        // viewEmployee();
        //viewManagers();
        //viewDept();
        viewRoles();
    })
};


// function to obtain list of all dept
async function viewDept() {
    await database.viewAllDept().then(([rows]) => {
        let dept = rows;
        console.log("\n");
        console.table(dept);
    }).then(() => userOptions());
};


// function to obtain list of all roles
async function viewRoles () {
    await database.viewAllRoles().then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
    }).then(() => userOptions());
};

//  async function viewEmployee () {
//     const employee = await database.viewAllEmployees();

//     console.log("\n");
//     console.table(employee);
//     userOptions();
// };


// async function viewEmployee() {
//     await database.viewAllEmployees().then(([rows]) => {
//         let employee = rows;
//         console.log("\n");
//         console.table(employee);
//     }).then(() => userOptions());
// };

async function viewManagers() {
    await database.viewAllManagers().then(([rows])=>{
        let managers = rows;
        console.log("\n");
        console.table(managers);
    }).then(()=>userOptions());
};

// viewEmployee();


// function addDepartment () {
//     return inquirer.prompt([
//         {
//             name: "DepName",
//             message: "Please enter the name of the department",
//             type: "input"
//         }
//     ])
// };

// // WHEN I choose to add a role
// // THEN I am prompted to enter the name, salary, and department for the role

// function addRole () {
//     return inquirer.prompt([
//         {
//             name: "title",
//             message: "Please enter name of the role you would like to add ",
//             type: "input"
//         },
//         {
//             name: "dept",
//             message:"Please enter the department ID",
//             type: "number"
//         },
//         {
//             name: "salary",
//             message: "Please enter salary. (formate : 60000)",
//             type: "number"
//         }
//     ])
// };

// // WHEN I choose to add an employee
// // THEN I am prompted to enter the employee’s first name, last name, role, and manager

// function addEmployee () {
//     return inquirer.prompt([
//         {
//             name: "firstName",
//             message: "Please Enter their first name",
//             type: "input"
//         },
//         {
//             name: "lastName",
//             message: "Please Enter their last name",
//             type: "input"
//         },
//         {
//             name: "list",
//             message: "Please select their role name",
//             type: "input"
            
//         },
//         {
//             name: "list",
//             message: "Please select their manager",
//             type: "input"
            
//         }

//     ])
// };

// // WHEN I choose to update an employee role
// // THEN I am prompted to select an employee to update and their new role

// function updateEmployee () {
//     return inquirer.prompt ([
//         {
//             name:"newRole",
//             message: "Please secect their new role",
//             type: "input"
            
//         },
//         {
//             name:"newMan",
//             message: "Please secect their new Manager",
//             type: "input"
            
//         },
//         {   name:"newDep",
//             message: "Please secect their new Department",
//             type: "input"
            
//         }
//     ])
// };

// // function to remove employee
// function removeEmployee() {
//     return inquirer.prompt ([
//         {
//            name:"detEmp" ,
//            message:"Please choose the employee you want to remove.",
//            type: "input"
           
//         }
//     ])
// };