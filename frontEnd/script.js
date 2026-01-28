/* Scarlet Salinas */
/*CMPS2232 */
/*Task 1: Full-Time Employee Management System */
/*File: script.js (Front End) */

//console.log("ok");

// Get form elements
const addBtn = document.getElementById("addEmployeeBtn");
const form = document.getElementById("addEmployeeForm");
const cancelBtn = document.querySelector(".cancelBtn");
const employeeForm = document.getElementById("employeeForm");
const successMsg = document.getElementById("successMsg");

const fname = document.getElementById('fName');
const lname = document.getElementById('lName');
const dept = document.getElementById('dept');

// Open form when add button is clicked
addBtn.addEventListener("click", function() {
    form.style.display = "block";
    fname.focus(); 
});

// Close form when cancel is clicked
cancelBtn.addEventListener("click", function() {
    form.style.display = "none";
    employeeForm.reset();
});

// Close form if clicked oustside form
window.addEventListener("click", function(event) {
    if(event.target === form) {
        form.style.display = "none";
        employeeForm.reset();
    }
});

// Form submission handling
employeeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("fName").value.trim();
    const lastName = document.getElementById("lName").value.trim();
    const department = document.getElementById("dept").value;

    // VALIDATION
    let errorMsg = "";

    if(!firstName) {
        errorMsg = "Field cannot be empty.";
        fname.focus();
    }else if(!lastName) {
        errorMsg = "Field cannot be empty.";
        lname.focus();
    /*}else if(!department) {
        errorMsg = "Please select a department.";
        dept.focus();*/
    }else if(/\d/.test(firstName) || /[^A-Za-z\s\-']/.test(firstName)) {
        errorMsg = "First name can only contain letters, spaces, hyphens, and apostrophes";
        fname.focus();
    }else if(/\d/.test(lastName) || /[^A-Za-z\s\-']/.test(lastName)) {
        errorMsg = "Last name can only contain letters, spaces, hyphens, and apostrophes";
        lname.focus();
    }

    // If there's an error, show it and stop
    if (errorMsg) {
        statusMsg.innerHTML = errorMsg;
        return;
    } else {
        statusMsg.innerHTML = "New employee added succesfully." 
    }

    // Log data for now (will be saved to database later)
    console.log("New Employee:", {
        firstName: firstName,
        lastName: lastName,
        department: department
    });    

    employeeForm.reset();
});


