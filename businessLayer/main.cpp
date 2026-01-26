// main.cpp
#include "Employee.h"
#include <iostream>
using namespace std;

int main() {
    // Test with parameterized constructor
    Employee emp1(101, "John", "Doe", 1);
    emp1.displayEmployee();
    
    // Test with default constructor and setter
    Employee emp2;
    emp2.setEmployee(102, "Jane", "Smith", 2);
    emp2.displayEmployee();
    
    // Test individual setters and getters
    Employee emp3;
    emp3.setId(103);
    emp3.setFname("Bob");
    emp3.setLname("Johnson");
    emp3.setDept(3);
    
    cout << "\nEmployee 3 Details:" << endl;
    cout << "ID: " << emp3.getId() << endl;
    cout << "Name: " << emp3.getFname() << " " << emp3.getLname() << endl;
    cout << "Dept: " << emp3.getDept() << endl;
    
    return 0;
}