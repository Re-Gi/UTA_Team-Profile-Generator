const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];
const employeeDivs = [];

const teamLead = new Manager();

const buildTeam = (newEmployee) => {
    const employeeQs = [
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },
    
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id?",
        },
    
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
        },
    ]
    switch(newEmployee.getRole()) {
        case 'Manager':
            inquirer.prompt([
                ...employeeQs,
                {
                    type: 'input',
                    name: 'office',
                    message: "What is the employee's office number?",
                },

                {
                    type: 'list',
                    name: 'next',
                    message: "Would you like to add another emloyee?",
                    choices: ["Manager", "Engineer", "Intern", "No more employees."],
                },
            ])
            .then((res) => {
                newEmployee.name = res.name;
                newEmployee.id = res.id;
                newEmployee.email = res.email;
                newEmployee.officeNumber = res.office;

                generateDiv(newEmployee);
                checkNext(res.next);
            })
            break;
        case 'Engineer':
            inquirer.prompt([
                ...employeeQs,
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the employee's GitHub username?",
                },

                {
                    type: 'list',
                    name: 'next',
                    message: "Would you like to add another emloyee?",
                    choices: ["Manager", "Engineer", "Intern", "No more employees."],
                },
            ])
            .then((res) => {
                newEmployee.name = res.name;
                newEmployee.id = res.id;
                newEmployee.email = res.email;
                newEmployee.github = res.github;

                generateDiv(newEmployee);
                checkNext(res.next);
            })
            break;
        case 'Intern':
            inquirer.prompt([
                ...employeeQs,
                {
                    type: 'input',
                    name: 'school',
                    message: "What school does/did the employee attend?",
                },

                {
                    type: 'list',
                    name: 'next',
                    message: "Would you like to add another emloyee?",
                    choices: ["Manager", "Engineer", "Intern", "No more employees."],
                },
            ])
            .then((res) => {
                newEmployee.name = res.name;
                newEmployee.id = res.id;
                newEmployee.email = res.email;
                newEmployee.school = res.school;

                generateDiv(newEmployee);
                checkNext(res.next);
            })
            break;
    }
}

const checkNext = (str) => {
    switch(str) {
        case "Manager":
            const newManager = new Manager();
            buildTeam(newManager);
            break;
        case "Engineer":
            const newEngineer = new Engineer();
            buildTeam(newEngineer);
            break;
        case "Intern":
            const newIntern = new Intern();
            buildTeam(newIntern);
            break;
        default:
            generateHTML();
    };
};

const generateDiv = (data) => {
    employees.push(data);
    const employeeDiv = `<h2 class="card-title">${data.name}</h2>`

    employeeDivs.push(employeeDiv);
};

const generateHTML = () => {
    console.log(employees);

    // fs.readFileSync(`./src/template.html`, {encoding: 'utf8', flag:'as'});

    // fs.copyFileSync(`./src/template.html`, `./dist/team.html`);
};



buildTeam(teamLead);