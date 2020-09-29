const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];
let testEmployee = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let manager = () => {
  inquirer
  .prompt([
    {
      type: "input",
      message: "Welcome to the Employee Template Engine. \nAs the Manager please enter your Name.",
      name: "manager"
    },
    {
      type: "input",
      message: "What is your ID Number?",
      name:"managerId"
    },
    {
      type: "input",
      message: "What is your Email Address?",
      name:"managerEmail"
    },
    {
      type: "input",
      message: "What is your Office Number?",
      name:"managerOffice"
    }
  ])
  .then(function(respMan){
    const manager = new Manager (respMan.manager, respMan.managerId, respMan.managerEmail, respMan.managerOffice);
    employees.push(manager)
    return engineer()
  })
}


var engineer = function(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Name of the Engineer you wish to input?",
        name: "engineer"
      },
      {
        type: "input",
        message: "What is the Engineer's ID Number?",
        name: "engineerId"
      },
      {
        type: "input",
        message: "What is the Engineer's Email Address?",
        name: "engineerEmail"
      },
      {
        type: "input",
        message: "What is the Engineer's GitHub User Name?",
        name: "engineerGithub"
      },
      {
        type: "confirm",
        message: "Do you wish to input another Engineer?",
        name: "engConfirm"
      }
    ])
    .then(function(respEng){
      const engineerObj = new Engineer(respEng.engineer, respEng.engineerId, respEng.engineerEmail, respEng.engineerGithub)

      employees.push(engineerObj)
      if(respEng.engConfirm){
        return engineer()
      }else{
        return intern()
      }
    })

};
var intern = function(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Name of the Intern you wish to input?",
        name: "intern"
      },
      {
        type: "input",
        message: "What is the Intern's ID Number?",
        name: "internId"
      },
      {
        type: "input",
        message: "What is the Intern's Email Address?",
        name: "internEmail"
      },
      {
        type: "input",
        message: "What is the Intern's University?",
        name: "internSchool"
      },
      {
        type: "confirm",
        message: "Do you wish to input another Intern?",
        name: "intConfirm"
      }
    ])
    .then(function(respInt){
      const internObj = new Intern (respInt.intern, respInt.internId, respInt.internEmail, respInt.internSchool)

      employees.push(internObj)
      if(respInt.intConfirm){
        return intern()
      }
      console.log(employees)
    })

};

manager();
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "Welcome to the Employee Template Engine. \nAs the Manager please enter your Name.",
//       name: "manager"
//     },
//     {
//       type: "input",
//       message: "What is your ID Number?",
//       name:"managerId"
//     },
//     {
//       type: "input",
//       message: "What is your Email Address?",
//       name:"managerEmail"
//     },
//     {
//       type: "input",
//       message: "What is your Office Number?",
//       name:"managerOffice"
//     }
//   ])
//   .then(function(resp){
//     const manager = new Manager (resp.name, resp.managerId, resp.managerEmail, resp.managerOffice)
//     console.log(manager);
//     console.log(manager.getRole());
//     employees.push(manager);
//     engineer()
//     console.log(testEmployee)
//   })
  // .prompt([
  //   {
  //     type: "input",
  //     message: "What is your user name?",
  //     name: "username"
  //   },
  //   {
  //     type: "password",
  //     message: "What is your password?",
  //     name: "password"
  //   },
  //   {
  //     type: "password",
  //     message: "Re-enter password to confirm:",
  //     name: "confirm"
  //   }
  // ])
  // .then(function(response) {

  //   if (response.confirm === response.password) {
  //     console.log("Success!");
  //   }
  //   else {
  //     console.log("You forgot your password already?!");
  //   }
  // });


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
