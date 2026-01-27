--File: seed_data.sql
-- Populates the database with sample data
USE employee_db;

TRUNCATE TABLE employees;
TRUNCATE TABLE departments;

INSERT INTO departments (dept_name) VALUES 
('Engineering'),
('Marketing'),
('Sales'),
('Human Resources'),

INSERT INTO employees (first_name, last_name, dept_id, hire_date) VALUES
('John', 'Smith', 1, '2023-01-15'),
('Sarah', 'Johnson', 2, '2023-02-20'),
('Michael', 'Chen', 3, '2023-03-10'),
('Emily', 'Davis', 4, '2023-04-05');
