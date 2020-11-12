
//*********************************************************************************
// Priya Singh
// COMP 484 | Fall 2020
// Assignment 6 - Asmt_6.js
//*********************************************************************************


function construct() {
    'use strict';
	
  // Declare variables named “lastSpace”, "limitedText" and “originalText”;
	var lastSpace;
	var limitedText;
	var originalText = document.getElementById("metadata").value;

  if(originalText.length > 153){
  // Use the lastIndexOf() method to find the last space before 153 characters;
	lastSpace = originalText.lastIndexOf(" ", 152);
	
  // Use the slice() method to trim the text from the first character to the 
  // lastSpace position you just found and show the number of remaining characters 
  // in “Character Count”;
	limitedText = originalText.slice(0, lastSpace);
  	document.getElementById("cCount").value = lastSpace;

  // Test your code by click the “submit” button and make sure that if you enter a 
  // chunk of text that includes spaces it will be trimmed to the first space 
  // encountered before 153th characters and replace the rest contents with an 
  // ellipsis (...). 
    document.getElementById("result").value = limitedText + "...";
  }// end if
  
  else{
    document.getElementById("cCount").value = originalText.length;
    document.getElementById("result").value = originalText;
  }// end else
  
  // Function performs the construction of description and returns false.
            return false;   

} // End of calculate() function.


function init() {
            'use strict';
			
// Function called when the form is submitted.
            document.getElementById('theForm').onsubmit = construct;

} // End of init() function.

window.onload = init;