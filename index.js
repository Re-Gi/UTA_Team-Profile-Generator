const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { generateDiv, generateHTML } = require('./src/template');

// const employees = [];
// const employeeDivs = [];

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
                    choices: ["Engineer", "Intern", "No more employees."],
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
                    choices: ["Engineer", "Intern", "No more employees."],
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
                    choices: ["Engineer", "Intern", "No more employees."],
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

// const generateDiv = (data) => {
//     employees.push(data);

//     // employees.forEach((employee) => {
//     //     const employeeDiv = `<div class="card employee-card">
//     //     <div class="card-header bg-primary text-white">
//     //         <h2 class="card-title">${this.name}</h2>
//     //         <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.getRole}</h3>
//     //     </div>
//     //     <div class="card-body">
//     //         <ul class="list-group">
//     //             <li class="list-group-item">ID: ${data}</li>
//     //             <li class="list-group-item">Email: <a href="mailto:bigboss@gmail.com">bigboss@gmail.com</a></li>
//     //             <li class="list-group-item">Office number: 512-459-2222</li>
//     //         </ul>
//     //     </div>
//     // </div>`;
//     // })


// //     employeeDivs.push(employeeDiv);
// };

// const generateHTML = () => {
//     console.log(employees);

//     // fs.writeFileSync('./dist/team.html', `<!DOCTYPE html>
//     // <html lang="en">
//     // <head>
//     //     <meta charset="UTF-8" />
//     //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     //     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     //     <title>My Team</title>
//     //     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//     //         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     //     <link rel="stylesheet" href="style.css">
//     //     <script src="https://kit.fontawesome.com/c502137733.js"></script>
//     // </head>
//     // <body>
//     //     <div class="container-fluid">
//     //         <div class="row">
//     //             <div class="col-12 jumbotron mb-3 team-heading bg-danger">
//     //                 <h1 class="text-center text-white">My Team</h1>
//     //             </div>
//     //         </div>
//     //     </div>
//     //     <div class="container">
//     //         <div class="row">
//     //             <div class="row team-area col-12 d-flex justify-content-center">
//     // <div class="card employee-card">
//     //     <div class="card-header bg-primary text-white">
//     //         <h2 class="card-title">Less Nessman</h2>
//     //         <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
//     //     </div>
//     //     <div class="card-body">
//     //         <ul class="list-group">
//     //             <li class="list-group-item">ID: 86525</li>
//     //             <li class="list-group-item">Email: <a href="mailto:bigboss@gmail.com">bigboss@gmail.com</a></li>
//     //             <li class="list-group-item">Office number: 512-459-2222</li>
//     //         </ul>
//     //     </div>
//     // </div>
//     // ${employeeDivs.forEach()}
//     //             </div>
//     //         </div>
//     //     </div>
//     // </body>
//     // </html>`, 
//     // (err) =>
//     // err ? console.log(err) : console.log('Success!'));

//     // fs.readFileSync(`./src/template.html`, {encoding: 'utf8', flag:'as'});

//     // fs.copyFileSync(`./src/template.html`, `./dist/team.html`);
// };



buildTeam(teamLead);


// On initialize: create team lead (manager)
// ask what member to be added next (if none, generate html)
//