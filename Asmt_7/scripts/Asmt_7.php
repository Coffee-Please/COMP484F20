<?php
    // Create JSON Array to store default values
	  $json = array(
		'result' => "none",
		'length' => 0
	  ); // end $json

	//If the employess array is set
	if(isset($_POST['employees'])) {
		//Set the variables
		$json['result'] = $_POST['employees'];// JSON array from Asmt_7.js
		$json['length'] = count($json['result']); // Count the number of objects in the array
		
		// Output to the div		
		echo "<p>Total Employees: ", $json['length'], "</p>";
	} // end if
?>