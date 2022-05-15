
// Import and require inquirer and figlet 
const inquirer = require("inquire");
const figlet = require("figlet");







// Figlet application name
figlet("EMPLOYEE \n \n \n MANAGEMENT \n \n \n SYSTEM ", (err, data) => {
    if(err) throw err;
    console.log(data);
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


async function viewEmployee () {
    const employee = await database.findAllEmployees();

    console.log("\n");
    console.table(employee);
    userOptions();
}

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