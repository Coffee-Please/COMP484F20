**Add an Employee**

This lab will guide you through how to set up the server end for further development in this class.

**Back End**

Normally, a back end includes a web server, a database server, and an interpreter for the PHP language. In this class, we recommend Apache web server and MySQL database server. Although you can install and configure these components individually, that can be tedious and error prone. As a result, we recommend using the XAMPP package to simplify the installation of Apache, MySQL and PHP.

The URL for downloading XAMPP is, https://www.apachefriends.org/index.html (Links to an external site.)

 
After you download the executable file (depending on your OS version) use a file manager to start the installer by double-click on it. You can accept most of the defaults that should install XAMPP into \xampp directory on your hard drive.

 
The XAMPP package includes the Apache web server, the MySQL database server, the PHP interpreter, and other software/tools that’s useful for developing PHP applications.

 
Once you have installed XAMPP, you can test that installation by starting and stopping the Apache and MySQL servers.

Open a web browser and enter this URL to test the server as Figure 1 shows, http://localhost (Links to an external site.)

 
![Picture1.png]()

Figure 1. Verify XAMPP

 

If this URL displays a web page like Figure 3, you have successfully installed and started the Apache server. By default, this page displays a page that provides some additional information about XAMPP. The service uses port 80 by default.

Finally, create a PHP page to accept data from the front end and echo “Total employee” back to the front end.


**Front End**

First, you can use either HTML+JavaScript or PHP to implement a page like this,
 
![Picture2.png]()

Figure 2. Front End

Then, here are the tasks you will need to perform in JavaScript or PHP:
 
- Create a global array to store all employees as you add them.  I would name it 'employees', but that is really up to you.
- Create an employeeId variable and store a randomly generated 8 digit employee id number. Make sure the id number is unique.
- Add an employeeId property to your employee object and set its value to your employeeId variable.
- Make the employee object as a JSON object and send it to the back or front end as a JSON object.
- Add each newly created employee to your employees array (check duplicate before adding).  
- Just so you can debug things easier, use console.log to output your employees array to the console after creating a new employee.
- Display the employee in the output HTML.
- Add one last line to your message that will display the total number of employees that have been added to your array.
- At the bottom of the form add a browser icon detected by your code to show which browser the user is currently using.
- Once you are done with HTML, CSS, and JavaScript or PHP (code in a separate JSBin repo) lock your revision in JSBin and submit the URL for your code. The lock version should show a timestamp of when the code was completed.
- Take the HTML, CSS, and JavaScript or PHP from your completed work in JSBin and upload them to your own website.
 

You can use JSBin to edit some code, but then you will take that code and post it to your publicly accessible web server.  You will submit 2 URLs for this assignment:  The URL for HTML CSS and JavaScript, another JSBin containing PHP code (and the URL from a public accessible website where your pages now live). Follow these instructions carefully and you should be able to easily get this assignment completed. 

 
You will be graded according to the criteria. Be sure to look over this form carefully to make sure you have met all of the criteria.


**Grading Rubrics**    

- Set up back end for running this assignment (5 pts)

- Create the PHP page required in the “Back End” section and include the URL of the page through the front end (10 pts)

- HTML elements properly added (No mix with other types of code) (10 pts)

- Item 1 to 9 (5 pts each)

- Submit URL of JSBin repositories (10 pts)

- JSBin URLs submitted showing completed working code and timestamps (20 pts)
