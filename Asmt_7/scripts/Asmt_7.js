//*********************************************************************************
// Priya Singh
// COMP 484 | Fall 2020
// Assignment 7 - scripts/Asmt_7.js
//*********************************************************************************

// Create a global array to store all employees as you add them. 
// I would name it 'employees', but that is really up to you.
var employees = [];

function addEmployee() {
    'use strict';
  
    // Create new employee object, add appropriate fields
    var employee = {
      name: (document.getElementById('fname').value + " " + document.getElementById('lname').value),
      department: document.getElementById('dept').value,
      employeeId: null,
      hireDate: null
    };
	
    // Hire date is today's date
    var hireDate = new Date();
    employee.hireDate = hireDate.toDateString();
  
	// Create an employeeId variable and store a randomly generated 8 digit employee id number. 
	var employeeId = parseInt(Math.random() * 99999998).toPrecision(8).split('.').reverse().join('');
  
    // Make sure the employee ID is unique
    for(var i = 0; i < employees.length; i++){
      // if employeeId exists, regenerate a new one
       while (JSON.stringify(employee.employeeId) === JSON.stringify(employees[i].employeeId)){
         	employeeId = parseInt(Math.random() * 99999998).toPrecision(8).split('.').reverse().join('');
       } // end while  
     } // end for
  
	// Add an employeeId property to your employee object and set its 
	// value to your employeeId variable.
    employee.employeeId = employeeId;

	// Make the employee object as a JSON object 
    JSON.stringify(employee);

	// Add each newly created employee to your employees array (check duplicate before adding).  
     for(var j = 0; j < employees.length; j++){
      // if employee exists, return with message
       if(JSON.stringify(employee.employeeId) === JSON.stringify(employees[j].employeeId)){
             document.getElementById('result').innerHTML = "Employee is a duplicate";
         return false;
       } // end if  
     } // end for
  
    //Send it to the back end of the array as a JSON object.
    employees.push(employee);
  
	// Use console.log to output your employees array to the console
	console.clear();
    console.log(employees);
  
	// Display the employee in the output HTML.
    document.getElementById('result').innerHTML = "<h3>Employee Added</h3>" +
      "<p>Name: " + employee.name + "</p>" +
      "<p>Department: " + employee.department + "</p>" +
      "<p>Employee ID: " + employee.employeeId + "</p>" +
      "<p>Hire Date: " + employee.hireDate + "</p>";
	
	// Using JavaScript to show number of employees added
    document.getElementById('totalEmployees').innerHTML = "<p>Total Employees: " + employees.length + "</p>";
	  
	// Add a browser icon detected to show the browser the user is currently using.
    //Browsers to detect
    var browsers = ['Edg', 'Chrome', 'Safari', 'MSIE', 'Firefox'];
    var browserDetected;
  
    // Go through the array of browsers
    for(var k = 0; k < browsers.length; k++) {
      // If the browser in found in the navigator.userAgent information
      if(navigator.userAgent.indexOf(browsers[k]) > -1) {
            // Save it in the browserDetected variable
            browserDetected = browsers[k];
            break;
      }// end if
    } // end for
  
    var img = new Image();
  
    // Add image to HTML based on browser that was detected
    switch(browserDetected) {  
      // Microsoft Edge
      case 'Edg':
        img.src = 'img/edge.png';
        document.getElementById('browser').innerHTML = "<img src=" + img.src +" alt='Edge Browser Logo'>"; 
        break;
        
      // Google Chrome
      case 'Chrome':
        img.src = 'img/chrome.png';
        document.getElementById('browser').innerHTML = "<img src=" + img.src +" alt='Chrome Browser Logo'>"; 
        break;
        
      // Firefox    
      case 'Firefox':
        img.src = 'img/firefox.png';
        document.getElementById('browser').innerHTML = "<img src=" + img.src +" alt='Firefox Browser Logo'>"; 
        break;
    
      // Microsoft Internet Explorer
      case 'MSIE':
        img.src = 'img/msie.png';
        document.getElementById('browser').innerHTML = "<img src=" + img.src +" alt='MSIE Browser Logo'>"; 
        break;
        
      // Safari
      case 'Safari':
        img.src = '../img/safari.png';
        document.getElementById('browser').innerHTML = "<img src=" + img.src +" alt='Safari Browser Logo'>"; 
        break;
		
      // Not and option available in array  
      default: 
        document.getElementById('browser').innerHTML = "Error: Browser icon not available.";
        break;
    } // end switch
	
	// Function adds employee and returns false.
	return false;   
} // end construct() function.

function sendPHP() {
	'use strict';
	
	// Send number of employees to PHP page
	window.open("scripts/Asmt_7.php?totalEmployees=" + employees.length, "_self");
	
	return false;  
} // end sendPHP() function

function init() {
            'use strict';
			
// Function called when the form is submitted.
            document.getElementById('theForm').onsubmit = addEmployee;

} // End of init() function.

window.onload = init;
