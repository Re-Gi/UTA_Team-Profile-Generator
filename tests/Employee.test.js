const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should take name, id, and email values and create a new object", () => {
            const employee = new Employee("Sharon", 1, "sharon@email.com");
            
            expect(employee.name).toEqual("Sharon");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("sharon@email.com");
        });
    });
    
    describe("get methods", () => {
        it("should return the corresponding values of the employee their called on.", () => {
            const employee = new Employee("Mark", 25, "mark@email.com");
            
            expect(employee.getName()).toEqual("Mark");
            expect(employee.getId()).toEqual(25);
            expect(employee.getEmail()).toEqual("mark@email.com");
            
        });
    });

    describe("getRole method", () => {
        it("should return 'Employee' on variables of the Employee class.", () => {
            const employee = new Employee();
            
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});