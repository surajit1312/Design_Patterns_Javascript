function Developer(name) {
    this.name = name;
    this.type = "Developer";
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case "Developer":
                return new Developer(name);
            case "Tester":
                return new Tester(name);
            default:
                return null;
        }
    }
}

function intro() {
    console.log(`Hi! My name is ${this.name} and my role is ${this.type}`);
}

const empFactory = new EmployeeFactory();
const employees = [];

employees.push(empFactory.create("Patrick", "Developer"));
employees.push(empFactory.create("John", "Tester"));
employees.push(empFactory.create("Martha", "Developer"));
employees.push(empFactory.create("Nick", "Tester"));
employees.push(empFactory.create("Tim", "Developer"));

employees.forEach((emp) => {
    intro.call(emp);
});
