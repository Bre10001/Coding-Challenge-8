// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;          // Employee name
        this.salary = salary;      // Employee salary
        this.position = position;  // Employee position 
        this.department = department; // Employee's department name
    }

    
    getDetails() {
        console.log(`${this.name} works as a ${this.position} earning Salary: $${this.salary} annually`); // Method to get employee details as a formatted string
    }
}

// Example usage:
const employee1 = new Employee('Alice', 100000, 'Developer', 'Engineering');


employee1.getDetails(); // Output: Name: Alice, Position: Developer, Salary: $100000
//employee2.getDetails(); // Output: Name: Bob, Position: Designer, Salary: $80000

// Task 2: Create a Department Class

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
}

// Example Usage:
const employee2 = new Employee('Bob', 80000, 'Designer', 'Design'); // new employee

const Design = new Department('Design'); // department declaration

Design.addEmployee(employee2) // adds new employee to array

console.log(`The total department salary is:`, Design.getDepartmentSalary()); //Outputs the total department salary





