/* Scarlet Salinas */
/*CMPS2232 */
/*Task 1: Full-Time Employee Management System */
/*File: script.js (Front End) */

// Get form elements
const addBtn = document.getElementById("addEmployeeBtn");
const form = document.getElementById("addEmployeeForm");
const cancelBtn = document.querySelector(".cancelBtn");
const employeeForm = document.getElementById('employeeForm');

// Open form when add button is clicked
addBtn.addEventListener("click", function() {
    form.style.display = "block";
    document.getElementById('firstName').focus(); //Focus on fName field
});

// CLose form when cancel is clicked
cancelBtn.addEventListener("click", function() {
    form.style.display = "none";
    employeeForm.reset();
});