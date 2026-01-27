--File: queries.sql
USE employee_db;

-- Get all employees with departments
SELECT e.emp_id, e.first_name, e.last_name, d.dept_name, e.hire_date
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;

-- Get all departments for dropdown
SELECT * FROM departments ORDER BY dept_name;