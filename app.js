const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/employees", employeeRoutes);   // POST /employees
app.use("/departments", departmentRoutes); // GET /departments

app.listen(3000, () => console.log("Server running on port 3000"));