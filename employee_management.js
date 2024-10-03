// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;          // Employee name
        this.salary = salary;      // Employee salary
        this.position = position;  // Employee position 
        this.department = department; // Employee's department name
    }

    
    getDetails() {
        return(`${this.name} works as a ${this.position} earning Salary: $${this.salary} annually`); // Method to get employee details as a formatted string
    }
}


// Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee{
    constructor(name, salary, position, department, bonus){
        super(name, salary, "Manager",department); // inherits name, position, salary and department from Employee Class 
        this.bonus = bonus; // Employee's bonus
    }

    getDetails(){
        return(`${super.getDetails()}, Bonus: $${this.bonus}`); // Overriding the getDeatils method to include bonus
    
    }
}

// Task 2 & 4: Handle Bonuses for Managers

class Department{
    constructor(name, employees){
        this.name = name; // department name
        this.employees = [];  //empty employee array
    }

    addEmployee(employee){
        this.employees.push(employee); //Method to add employee to array

    }

    getDepartmentSalary(){
        return this.employees.reduce((total, employee) => total + employee.salary, 0); //Calculates the total department salary
    }
// Task 4 begins here
    calculateTotalSalaryWithBonus(){ //method to calculate bonus
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) { // includes managers
                return total + employee.salary + employee.bonus; // calculate total salary including bonus
            }
            return total + employee.salary; 
        }, 0 );
    }
}

// Task 5: Create and Manage Department and Employees

// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees and managers
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Manager", "Marketing", 25000);

// Add employees to their respective departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Print employee details
console.log(alice.getDetails()); // Output: Name: Bob, Position: Designer, Salary: $80000
console.log(bob.getDetails()); // Output: Name: Bob, Position: Designer, Salary: $80000
console.log(charlie.getDetails()); // Output: Name: Bob, Position: Designer, Salary: $80000
console.log(diana.getDetails()); // Output: Name: Bob, Position: Designer, Salary: $80000


// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);





