// Avoid creating any global variable (5 pts)
// Find the keyword by monitoring “keyup” event in JavaScript after the html page is loaded. (10 pts)
function checkKeyword() {
  'use strict';

  // Get the keyword and target string
  var keyword = document.getElementById('search').value;
  var string = document.getElementById('str').innerHTML;
  var newStr = "";
  var count = 0;
  
  // get the words in a array
  var wordarr = [];
  var index = 0;
  var word = "";
  
  for (var h = 0; h < string.length; h++) {
    var ch = string[h];
    if(ch === " ") {
      wordarr[index] = word;
      index++;
       word = "";
    }
    else {   
      word = word + ch;
    } 
  }
  
  // Count number of occurences of keyword
  for(var i = 0; i < wordarr.length; i++) {
    if(wordarr[i] === keyword) {
      count++;
    } // end if
  }

  // The keywords should appear more than 2 times. (10 pts)
  if (count > 2) {

    // Change the styling of the keyword (only the keyword, not the whole text element) 
    // based on the search result to green background with italic font style as Fig. 2 shows. (10 pts)
    for(var k = 0; k < wordarr.length; k++){
      if(wordarr[k] === keyword) {
        newStr = newStr + " <highlight>" + wordarr[k] + "</highlight>";        
      }    
      else{
      newStr = newStr + " " +wordarr[k];
      console.log(wordarr[k]);
      }
    }
      document.getElementById('str').innerHTML = newStr;
  }
 
  return false;
}
