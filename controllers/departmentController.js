const db = require("../db/dbConnection");

exports.getDepartments = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT dept_id, dept_name FROM departments"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Postgres error:", err.message);
    res.status(500).json({ error: err.message });
  }
};
