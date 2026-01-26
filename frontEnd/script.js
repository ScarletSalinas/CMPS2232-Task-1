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
const successMsg = document.getElementsByClassName("successMsg");

// Open form when add button is clicked
addBtn.addEventListener("click", function() {
    form.style.display = "block";
    document.getElementById('firstName').focus(); //Focus on fName field
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
        successMsg.style.display = "none";
    }
});

// Form submission handling
employeeForm.addEventListener('submit', function(event) {
    
    // Get form values
    const firstName = document.getElementById('fName').value.trim();
    const lastName = document.getElementById('lName').value.trim();
    const department = document.getElementById('dept').value;
    
    // Log data (will be sent to database later???)
    console.log('New Employee:', {
        firstName: firstName,
        lastName: lastName,
        department: department
    });

    //show successful submission msg
    successMsg.style.display = "block";

    //reset form
});


