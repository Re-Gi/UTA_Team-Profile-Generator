const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const newEmployee = new Engineer();

switch(newEmployee.getRole()) {
    case 'Manager':
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
            },

            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's id?",
            },

            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email?",
            },

            {
                type: 'input',
                name: 'office',
                message: "What is the manager's office number?",
            },
        ])
        // .then(fs.appendFile)
        .then((res) => {
            this.name = res.name;
            this.id = res.id;
            this.email = res.email;
            this.officeNumber = res.office;

            console.log(this);
        })
        break;
    case 'Engineer':
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this engineer's name?",
            },

            {
                type: 'input',
                name: 'id',
                message: "What is this engineer's id?",
            },

            {
                type: 'input',
                name: 'email',
                message: "What is this engineer's email?",
            },

            {
                type: 'input',
                name: 'github',
                message: "What is this engineer's GitHub username?",
            },
        ])
        // .then(fs.appendFile)
        .then((res) => {
            this.name = res.name;
            this.id = res.id;
            this.email = res.email;
            this.github = res.github;

            console.log(this);
        })
        break;
    case 'Intern':
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this intern's name?",
            },

            {
                type: 'input',
                name: 'id',
                message: "What is this intern's id?",
            },

            {
                type: 'input',
                name: 'email',
                message: "What is this intern's email?",
            },

            {
                type: 'input',
                name: 'school',
                message: "What school does/did this intern attend?",
            },
        ])
        // .then(fs.appendFile)
        .then((res) => {
            this.name = res.name;
            this.id = res.id;
            this.email = res.email;
            this.school = res.school;

            console.log(this);
        })
        break;
}
