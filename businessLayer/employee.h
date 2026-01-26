// Employee.h
// Declaration of class Employee
// Member functions defined in file: Employee.cpp

#ifndef EMPLOYEE_H
#define EMPLOYEE_H

#include <iostream>
#include <string>
d
class Employee
{
    public:
        // Constructor
        Employee(int id, std::string fname, std::string lname, int dept);
        
        // Default constructor (optional but recommended)
        Employee();

        // Set functions
        void setId(int);
        void setFname(std::string);
        void setLname(std::string);
        void setDept(int);
        void setEmployee(int, std::string, std::string, int);

        // Get functions
        int getId();
        std::string getFname();
        std::string getLname();
        int getDept();

        // Display data function
        void displayEmployee();

    private:
        int id;
        std::string fname;
        std::string lname;
        int dept;
}; 

#endif // EMPLOYEE_H