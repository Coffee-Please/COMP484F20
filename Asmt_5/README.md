**Calculator**

For this assignment you will use the JSBin to create a HTML5 web form. 
This webpage helps a customer to calculate the total amount. You will use your HTML, CSS and JavaScript skills to create a web form like this,

![Program Preview](https://github.com/Coffee-Please/COMP484F20/raw/main/Asmt_5/img/Picture1.png)

**HTML**

A form with these components,

- A “Fieldset” to the page;
- A “Legend” to the page;
- Multiple input elements with labels;
- A "Calculate" button below the last input;

**CSS**

- Follow CSUN Identity Guideline for your CSS. You need to maintain a consistent styling for similar elements in this lab.
- Use fluid layout and relative size for all styling.
- Add a media query for the screen type that checks that the viewport width is 479 pixels or less. When the width of the page is reduced to less than 480 pixels, all of the font sizes should be reduced accordingly.
- Use a Google Font by using Google Fonts API https://developers.google.com/fonts/docs/getting_started (Links to an external site.)


**JavaScript (You can start with the skeleton code below)**

- Declare variables named "total", “quantity”, “price”, and “discount”;
- Declare a variable named "tax" and assign the value of the tax variable to the value of the HTML element with the 'tax' id;
- When “calculate” button is clicked, assign the value of the total variable to be the result of multiplying the quantity times price;
- Calculate the total again by using discount in percentage;
- Format the total to show 2 decimal places by using the toFixed() method. Assign the result to the total variable.
 
```php
// Function called when the form is submitted.

// Function performs the calculation and returns false.

function calculate() {

            'use strict';

    //add your code here

            return false;   

} // End of calculate() function.

function init() {

            'use strict';

            document.getElementById('theForm').onsubmit = calculate;

} // End of init() function.

window.onload = init;
```


Test your code and make sure that if you enter a quantity of 9, a price of 8.00, a tax rate of 9.8%, and a discount of 10% your form looks similar to the one shown below after click the “calculate” button:

![Test Preview](https://github.com/Coffee-Please/COMP484F20/raw/main/Asmt_5/img/Picture2.png)

**Estimated time: 90 to 120 minutes.**

**Submission Instruction**

You will be graded according to each requirement. Be sure you have met all of the criteria. You will use JSBin to submit your assignment. Once you have modified your HTML page as directed above, lock a copy of it by using the Share menu in JSBin. This will provide a locked URL that represents your work.  Submit this URL for grading. Failure to adhere to this submission instruction will be grounds for rejection of work. 

**Lab 5 Grading Rubrics**

- HTML elements properly added: 10 pts

- CSS rules properly added according to CSUN Guideline: 20 pts

- Use media selector: 10 pts

- Use Google Font API: 5 pts

- JavaScript variables are properly added: 10 pts

- Calculation functions are added: 10 pts

- Code is tested and functions as shown in the screenshot: 10 pts

- Submit url of JSBin repository: 5 pts

**Total Points: 80**


