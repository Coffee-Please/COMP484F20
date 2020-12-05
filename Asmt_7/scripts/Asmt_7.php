<?php
	// if this is the PHP page
	if(isset($_GET['totalEmployees'])) {
		// echo total number of employees
		echo "<h1>Total Employees: ",  $_GET['totalEmployees'], "</h1>";
	} // end if
?>
