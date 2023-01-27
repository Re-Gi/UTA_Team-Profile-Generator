const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should take name, id, and email values and create a new object", () => {
            const sharon = new Employee("Sharon", 1, "sharon@email.com");
            
            expect(sharon.name).toEqual("Sharon");
            expect(sharon.id).toEqual(1);
            expect(sharon.email).toEqual("sharon@email.com");
        });
    });
    
    describe("getName method", () => {
        it("should ", () => {
            
            expect();
        });
    });

    describe("getId method", () => {
        it("should ", () => {
            
            expect();
        });
    });

    describe("getEmail method", () => {
        it("should ", () => {
            
            expect();
        });
    });

    describe("getRole method", () => {
        it("should ", () => {
            
            expect();
        });
    });
});