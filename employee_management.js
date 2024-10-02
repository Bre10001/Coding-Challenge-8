// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;          // Employee name
        this.salary = salary;      // Employee salary
        this.position = position;  // Employee position 
        this.department = department; // Employee's department name
    }

    
    getDetails() {
        console.log(`Name: ${this.name} works as a ${this.position} earning Salary: $${this.salary} annually`); // Method to get employee details as a formatted string
    }
}

// Example usage:
const employee1 = new Employee('Alice', 100000, 'Developer', 'Engineering');
const employee2 = new Employee('Bob', 80000, 'Designer', 'Design');

employee1.getDetails(); // Output: Name: Alice, Position: Developer, Salary: $100000
employee2.getDetails(); // Output: Name: Bob, Position: Designer, Salary: $80000
 
