// Employee.cpp
// Implementation of Employee class member functions

#include "Employee.h"
#include <iostream>
using namespace std;

//Constructor
Employee::Employee(int emp_id, string first_name, string last_name, int dept_id) {
    id = emp_id;
    fname = first_name;
    lname = last_name;
    dept = dept_id;
}

// Default constructor
Employee::Employee() {
    id = 0;
    fname = "";
    lname = "";
    dept = 0;
}

//set functions
void Employee::setId(int emp_id) {
    id = emp_id;
}

void Employee::setFname(string first_name) {
    fname = first_name;
}

void Employee::setLname(string last_name) {
    lname = last_name;
}

void Employee::setDept(int dept_id) {
    dept = dept_id;
}

void Employee::setEmployee(int emp_id, string first_name, string last_name, int dept_id) {
    id = emp_id;
    fname = first_name;
    lname = last_name;
    dept = dept_id;
}

//get functions
int Employee::getId() {
    return id;
}

string Employee::getFname() {
    return fname;
}

string Employee::getLname() {
    return lname;
}

int Employee::getDept() {
    return dept;
}

// Display function
void Employee::displayEmployee() {
    cout << "Employee ID: " << id << endl;
    cout << "Name: " << fname << " " << lname << endl;
    cout << "Department ID: " << dept << endl;
    cout << "---------------------" << endl;
}