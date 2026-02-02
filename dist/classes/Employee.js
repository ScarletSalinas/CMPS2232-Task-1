"use strict";
// Implementation of Employee class member functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    // Constructor with parameters
    constructor(emp_id, first_name, last_name, dept_id) {
        this.id = emp_id;
        this.fname = first_name;
        this.lname = last_name;
        this.dept = dept_id;
    }
    // Default constructor (alternative approach in TypeScript)
    static createDefault() {
        return new Employee(0, "", "", 0);
    }
    // set functions
    setId(emp_id) {
        this.id = emp_id;
    }
    setFname(first_name) {
        this.fname = first_name;
    }
    setLname(last_name) {
        this.lname = last_name;
    }
    setDept(dept_id) {
        this.dept = dept_id;
    }
    setEmployee(emp_id, first_name, last_name, dept_id) {
        this.id = emp_id;
        this.fname = first_name;
        this.lname = last_name;
        this.dept = dept_id;
    }
    // get functions
    getId() {
        return this.id;
    }
    getFname() {
        return this.fname;
    }
    getLname() {
        return this.lname;
    }
    getDept() {
        return this.dept;
    }
    // Display function
    displayEmployee() {
        console.log("Employee ID: " + this.id);
        console.log("Name: " + this.fname + " " + this.lname);
        console.log("Department ID: " + this.dept);
        console.log("---------------------");
    }
}
exports.Employee = Employee;
