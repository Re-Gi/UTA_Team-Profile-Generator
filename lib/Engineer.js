const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    };

    getSpecial() {
        return `GitHub: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}</a>`;
    };

    getIcon() {
        return `fa-glasses`;
    };
};

module.exports = Engineer;