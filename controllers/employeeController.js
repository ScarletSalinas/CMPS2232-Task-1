const { Employee } = require("../dist/classes/Employee");
const db = require("../db/dbConnection");
exports.addEmployee = async (req, res) => {
  const { firstName, lastName, departmentid } = req.body;

  try {
    const emp = new Employee(null, firstName, lastName, parseInt(departmentid));

    const result = await db.query(
      "INSERT INTO employees (first_name, last_name, dept_id) VALUES ($1, $2, $3) RETURNING id",
      [emp.getFirstName(), emp.getLastName(), emp.getDepartment()]
    );

    const newId = result.rows[0].id;
    res.json({ message: "Employee added successfully", emp_id: newId });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message || "Failed to add employee" });
  }
};
