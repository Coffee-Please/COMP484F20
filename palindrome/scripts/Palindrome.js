//*********************************************************************************
// Priya Singh
// COMP 484 | Fall 2020
// In-Class Exercise - Palindrome.js
//*********************************************************************************

function calculate(){
    'use strict';
	var input = document.getElementById("text").value;
  var string = input.split("");
  
  //Reverse the string
    var revString = [];
  
  for(var i = 0; i < string.length; i++){
    revString.push(string[(string.length - 1) - i]);
  }
  
  //go through the string forwards and backwards, comparing each letter
  for(var j = 0; j < string.length; j++){  
    //if they all match, continue
    if(string[j] == revString[j]){
    }
    else{
    document.getElementById("result").innerHTML = "It is not a palindrome.";
      return false;
    } 
  }
   
    //otherwise it is a palindrome
    document.getElementById("result").innerHTML = "It is a palindrome.";
    return false; 
}

function init() {
    'use strict';
			
// Function called when the form is submitted.
    document.getElementById('theForm').onsubmit = calculate;

  
} // End of init() function.

window.onload = init;
