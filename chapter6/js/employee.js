function process(){
    'use strict';

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let department = document.getElementById('department').value;

    let output = document.getElementById('output');

    let employee = {
            firstName: firstName,
            lastName: lastName,
            department: department,
            hireDate: new Date()
    };

    let message = '<h2>Employee Added</h2>Name: ' + employee.lastName + ', ' + employee.firstName + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();

    output.innerHTML = message;

    return false;
}

function init(){
    'use strict';

    document.getElementById('theForm').onsubmit = process;
}
window.onload = init;
