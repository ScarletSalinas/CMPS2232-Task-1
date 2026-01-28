// Declaration of class Employee interface
// Member functions implemented in file: employee.ts

export interface IEmployee {
    // Note: In TypeScript, we typically define the constructor signature differently
    // Constructors are part of the class implementation, not the interface
    
    // Set functions
    setId(id: number): void;
    setFname(fname: string): void;
    setLname(lname: string): void;
    setDept(dept: number): void;
    setEmployee(id: number, fname: string, lname: string, dept: number): void;

    // Get functions
    getId(): number;
    getFname(): string;
    getLname(): string;
    getDept(): number;

    // Display data function
    displayEmployee(): void;
}

// Alternative: Abstract class approach (closer to C++ class declaration)
export abstract class EmployeeBase {
    // Set functions (abstract - must be implemented by subclass)
    abstract setId(id: number): void;
    abstract setFname(fname: string): void;
    abstract setLname(lname: string): void;
    abstract setDept(dept: number): void;
    abstract setEmployee(id: number, fname: string, lname: string, dept: number): void;

    // Get functions
    abstract getId(): number;
    abstract getFname(): string;
    abstract getLname(): string;
    abstract getDept(): number;

    // Display data function
    abstract displayEmployee(): void;
}