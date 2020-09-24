const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([
    {
        type: "input",
        message: "Manager Name?",
        name: "manager"
    },
    {
        type: "input",
        message: "Their email?",
        name: "managerEmail"
    }
  ]).then(function(respManager){
    inquirer.prompt({
        type: 'input',
        message: 'Engineer Name?',
        name: 'engineer',
    }).then(function(respEngineer){
        console.log(respManager.manager)
        console.log(respEngineer.engineer)
    })
  })