
//*********************************************************************************
// Priya Singh
// COMP 484 | Fall 2020
// Assignment 5 - Asmt5.js
//*********************************************************************************


function calculate() {
    'use strict';
	
  // Declare variables named "total", “quantity”, “price”, “discount”, and "tax";
	var total;
	var quantity = parseInt(document.getElementById("quantity").value);
	var price = parseFloat(document.getElementById("price").value);
	var discount = parseFloat((document.getElementById("discount").value) / 100);
  	var tax = parseFloat((document.getElementById("tax").value) / 100);
  
  // Calculate total to be the result of multiplying the quantity times price;
	total = (quantity * price);

  // Calculate the total with the tax
    total = total + (tax * total);
  
  // Calculate the total again by using discount in percentage;
	total = total - (total * discount);

  // Format the total to show 2 decimal places by using the toFixed() method. 
  //Assign the result to the total variable.
    total = total.toFixed(2);
	
  //Display total
	document.getElementById("total").value = total;
	
  // Function performs the calculation and returns false.
            return false;   

} // End of calculate() function.

 

function init() {
            'use strict';
			
// Function called when the form is submitted.
            document.getElementById('theForm').onsubmit = calculate;

} // End of init() function.

window.onload = init;
