// Implementation of Employee class member functions

export class Employee {
    private id: number;
    private fname: string;
    private lname: string;
    private dept: number;

    // Constructor with parameters
    constructor(emp_id: number, first_name: string, last_name: string, dept_id: number) {
        this.id = emp_id;
        this.fname = first_name;
        this.lname = last_name;
        this.dept = dept_id;
    }

    // Default constructor (alternative approach in TypeScript)
    static createDefault(): Employee {
        return new Employee(0, "", "", 0);
    }

    // set functions
    setId(emp_id: number): void {
        this.id = emp_id;
    }

    setFname(first_name: string): void {
        this.fname = first_name;
    }

    setLname(last_name: string): void {
        this.lname = last_name;
    }

    setDept(dept_id: number): void {
        this.dept = dept_id;
    }

    setEmployee(emp_id: number, first_name: string, last_name: string, dept_id: number): void {
        this.id = emp_id;
        this.fname = first_name;
        this.lname = last_name;
        this.dept = dept_id;
    }

    // get functions
    getId(): number {
        return this.id;
    }

    getFname(): string {
        return this.fname;
    }

    getLname(): string {
        return this.lname;
    }

    getDept(): number {
        return this.dept;
    }

    // Display function
    displayEmployee(): void {
        console.log("Employee ID: " + this.id);
        console.log("Name: " + this.fname + " " + this.lname);
        console.log("Department ID: " + this.dept);
        console.log("---------------------");
    }
}