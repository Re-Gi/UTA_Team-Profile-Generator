const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return 'Intern';
    };

    getSpecial() {
        return `School: ${this.getSchool()}`;
    }

    getIcon() {
        return `fa-user-graduate`;
    };
};

module.exports = Intern;