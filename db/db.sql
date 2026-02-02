-- File: schema.sql


-- Drop tables if they exist
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

-- Create departments table
CREATE TABLE IF NOT EXISTS departments (
    dept_id SERIAL PRIMARY KEY,
    dept_name VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Populate table
INSERT INTO departments (dept_name) VALUES 
('Engineering'),
('Marketing'),
('Sales');

-- Create employees table with foreign key to departments
CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,  
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dept_id INT,
    hire_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Foreign key constraint
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id) ON DELETE SET NULL
);



