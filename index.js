
// Import and require inquirer and figlet 
const inquirer = require("inquire");
const figlet = require("figlet");





// Figlet application name
figlet("EMPLOYEE \n \n \n MANAGEMENT \n \n \n SYSTEM ", (err, data) => {
    if(err) throw err;
    console.log(data);
});