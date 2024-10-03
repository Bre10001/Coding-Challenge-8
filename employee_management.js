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

// Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee{
    constructor(name, salary, position, department, bonus){
        super(name, salary, "Manager",department); // inherits name, position, salary and department from Employee Class 
        this.bonus = bonus; // Employee's bonus
    }

    getDetails(){
        console.log(`${super.getDetails()}, Bonus: $${this.bonus}`); // Overriding the getDeatils method to include bonus
    
    }
}

// Task 4: Handle Bonuses for Managers

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

    calculateTotalSalaryWithBonus(){ //method to calculate bonus
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) { // includes managers
                return total + employee.salary + employee.bonus; // calculate total salary including bonus
            }
            return total + employee.salary; 
        }, 0 );
    }
}







