
// Import and require inquirer and figlet 
const inquirer = require("inquirer");
const { prompt }  = require("inquirer");
const figlet = require("figlet");
// import class Database
const database = require("./db/database");
// require console table
const cTable = require('console.table');
const connection = require("./config/connection");
const { viewAllEmployees, addAllrole, addAllEmployee, removeAllRole, viewAllDept } = require("./db/database");



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
                "1 - View all Departments",
                "2 - View all Roles",
                "3 - View all Employees",
                "4 - View all Managers",
                "5 - Add a Department",
                "6 - Add a Role",
                "7 - Add an Employee",
                "8 - Update an Employee Role",
                "9 - Remove an Employee",
                "10 - Remove Department",
                "11 - Remove role",
                "12 = view employee by Department",
                "- Exit"
            ]
        }
    ])
    .then((answer) => {
       // viewDept(); - withouth swtich statement get list of all depts
        switch (answer.optionTree) {
            case "1 - View all Departments":
                viewDept();
                break;

            case "2 - View all Roles":
                viewRoles();
                break;

            case "3 - View all Employees":
                viewEmployee();
                break;

            case "4 - View all Managers":
                viewManagers();
                break;
            
            case "5 - Add a Department":
                addDept();
                break;
            
            case "6 - Add a Role":
                addRole();
                break;

            case "7 - Add an Employee":
                addEmployee();
                break;

            case "8 - Update an Employee Role":
                updateEmployee();
                break;

            case "9 - Remove an Employee":
                removeEmployee();
                break;

            case "10 - Remove Department":
                removeDept();
                break;

            case "11 - Remove role":
                removeRole();
                break;

            case "12 = view employee by Department":
                viewEmpByDept();
                break;
            
            case "- Exit":
                exit();
                break;
                
        }
                      
    });
};


// function to obtain list of all dept
// async function viewDept() {
//     await database.viewAllDept().then(([rows]) => {
//         let dept = rows;
//         console.log("\n");
//         console.table(dept);
//     }).then(() => userOptions());
// };
//converted above function into async
async function viewDept() {
    const dept = await database.viewAllDept();
    const result = [...dept];
    console.log("\n");
    //console.table(dept);
    console.table(result[0]);
    userOptions();
};



// function to obtain list of all roles
// async function viewRoles () {
//     await database.viewAllRoles().then(([rows]) => {
//         let roles = rows;
//         console.log("\n");
//         console.table(roles);
//     }).then(() => userOptions());
// };
// converting above into async functin
async function viewRoles() {
    const roles = await database.viewAllRoles();
    const result = [...roles];
    console.log("\n");
    console.table(roles[0]);
    userOptions();

};



// async function viewEmployee() {
//     await database.viewAllEmployees().then(([rows]) => {
//         let employee = rows;
//         console.log("\n");
//         console.table(employee);
//     }).then(() => userOptions());
// };

// async function for better readbility 
async function viewEmployee () {
    const employee = await database.viewAllEmployees();
    const result = [...employee];
    console.log("\n");
    // console.table(result);
    console.table(result[0]);
    userOptions();
};




//function to view managers
// async function viewManagers() {
//     await database.viewAllManagers().then(([rows])=>{
//         let managers = rows;
//         console.log("\n");
//         console.table(managers);
//     }).then(()=>userOptions());
// };
// converting above function into async 
async function viewManagers() {
    const managers = await database.viewAllManagers();
    let result = [...managers];
    console.log("\n");
    console.table(result[0]);
    userOptions();

};


//function to add new department
// function addDept () {

//      inquirer.prompt ([
//         {
//             name: "DepName",
//             message: "Please enter the name of the department",
//             type: "input"
//         }
//     ])
//     .then((department) => { 
//         // console.log(department);
//         database.addAllDept(department.DepName).then( (rows) => {
//             let departments = rows;
//             console.log(`Added ${department.DepName} to the databse.`);
//             // console.table(viewAllDept());
//         })
//         .then(() => userOptions()); 
        
//     });
    
// };
//converting above function into async
async function addDept() {
    let answers = await prompt ([
        {
            name: "DepName",
            message: "Please enter the name of the department",
            type: "input"
        }
      
    ]);
        await database.addAllDept(answers.DepName);
        // // let result = [...department];
        console.log("\n");
        console.log(`Added ${answers.DepName} department to the databse.`);
        // console.table(department);
        userOptions();
   
};



// function to add new Roles
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
//     .then((role) => {
//         database.addAllrole(role.title, role.dept, role.salary);
//         console.log(`Added ${role.title} in dept ${role.dept} with ${role.salary} PA salary to the database`);
//         console.table(viewRoles());
        
//     });
           
// };
// converting above fucntion in async
async function addRole () {
     let answers = await prompt([
        {
            name: "title",
            message: "Please enter name of the role you would like to add ",
            type: "input"
        },
        {
            name: "dept",
            message:"Please enter the department ID",
            type: "number"
        },
        {
            name: "salary",
            message: "Please enter salary. (formate : 60000)",
            type: "number"
        }
    ])
    await database.addAllrole(answers.title, answers.dept, answers.salary);
    console.log("\n");
    console.log(`Added ${answers.title} in dept ${answers.dept} with ${answers.salary} PA salary to the database`);
    console.table(viewRoles());
       
};

// function to add new employee
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
//             name: "roleId",
//             message: "Please select their role ID",
//             type: "input"
            
//         },
//         {
//             name: "mangId",
//             message: "Please select their manager ID",
//             type: "input"
            
//         }

//     ]).then((employee) => {
//              database.addAllEmployee(employee.firstName, employee.lastName, employee.roleId, employee.mangId)
//             console.log(`added ${employee.firstName} ${employee.lastName} with ${employee.roleId} and their manager id ${employee.mangId} to the database`);
//             userOptions();
//     });
// };
// converting addemployee function inbto async
async function addEmployee () {
    let answers = await prompt([
        {
            name: "firstName",
            message: "Please Enter their first name",
            type: "input"
        },
        {
            name: "lastName",
            message: "Please Enter their last name",
            type: "input"
        },
        {
            name: "roleId",
            message: "Please select their role ID",
            type: "input"
            
        },
        {
            name: "mangId",
            message: "Please select their manager ID",
            type: "input"
            
        }

    ])
    await database.addAllEmployee(answers.firstName, answers.lastName, answers.roleId, answers.mangId);
    console.log("\n");
    console.log(`added ${answers.firstName} ${answers.lastName} with id # ${answers.roleId} and their manager id ${answers.mangId} to the database`);

    const updatedEmployeeList = await database.viewAllEmployees();
    let result = [...updatedEmployeeList];
    console.table(result[0]);
    userOptions();
    
};

//function to updated employee
// function updateEmployee() {
    
//     return inquirer.prompt ([
//         {
//             name:"id",
//             message: "Please secect their new role ID" ,
//             type: "input"
                      
//         },
//         {
//             name:"roleId",
//             message: "Please secect their current employee ID",
//             type: "input"
            
//         }
//         ]).then ((employee) => {
//         database.updateAllEmployee(employee.id, employee.roleId);
//         console.log(`Updated ${employee.roleId} and ${employee.id} to the database`);
//         userOptions();
//     })

// };
// updating above function into async await
async function updateEmployee() {
    
    let answers = await prompt ([
        {
            name:"id",
            message: "Please secect their new role ID" ,
            type: "input"
                      
        },
        {
            name:"roleId",
            message: "Please secect their current employee ID",
            type: "input"
            
        }
        ])
        await database.updateAllEmployee(answers.id, answers.roleId);
        console.log("\n");
        console.log(`Updated ${answers.roleId} and ${answers.id} to the database`);

        const updatedEmployeeList = await database.viewAllEmployees();
        let result = [...updatedEmployeeList];
        console.table(result[0]);
        userOptions()
        
};



// functionality to remove employee
// function removeEmployee() {
//     return inquirer.prompt ([
//         {
//            name:"rmEmp",
//            message:"Please choose the employee ID you want to remove.",
//            type: "input"
//         }

//     ]).then((employee) => {
//         database.removeAllEmployee(employee.rmEmp);
//         userOptions();
//     })
// };
//converting above function to async 
async function removeEmployee() {
    let answers = await prompt ([
        {
           name:"rmEmp",
           message:"Please choose the employee ID you want to remove.",
           type: "input"
        }

    ])
    await database.removeAllEmployee(answers.rmEmp);

    const updatedEmployeeList = await database.viewAllEmployees();
    let result = [...updatedEmployeeList];
    console.table(result[0]);
    userOptions()
   
};



// function to remove deparment through dept id
// function removeDept () {
//     return inquirer.prompt([
//         {
//             name:"rmDept",
//             message:"Please choose the deparment ID you want to remove.",
//             type: "input"
//         }                  
//     ]).then((dept) => {
//         database.removeAlldept(dept.rmDept)
//         userOptions();
//     })
// };
// converting abvoe function into async await
async function removeDept () {
    let answers = await prompt([
        {
            name:"rmDept",
            message:"Please choose the deparment ID you want to remove.",
            type: "input"
        }                  
    ])
    await database.removeAlldept(answers.rmDept);
    const updatedDeptList = await database.viewAllDept();
    let result = [...updatedDeptList];
    console.table(result[0]);
    userOptions();
       
};



// function to remove Role through Role id
// function removeRole () {
//     return inquirer.prompt([
//         {
//             name:"rmRole",
//             message:"Please choose the deparment ID you want to remove.",
//             type: "input"
//         }                  
//     ]).then((role) => {
//         database.removeAllRole(role.rmRole);
//         userOptions();       
//     })
// };
//converting above function async await
async function removeRole () {
    let answers = await prompt([
        {
            name:"rmRole",
            message:"Please choose the deparment ID you want to remove.",
            type: "input"
        }                  
    ])
    await database.removeAllRole(answers.rmRole);
    const roles = await database.viewAllRoles();
    const result = [...roles];
    console.log("\n");
    console.table(result[0]);
    userOptions();        
    
};


async function viewEmpByDept() {
    const employee = await database.viewAllEmployeesByDept();
    const result = [...employee];
    console.log("\n");
    console.table(result[0]);
    userOptions();
};
  
function exit (){
    console.log("GOodbye!");
    process.exit();
};