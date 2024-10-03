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





