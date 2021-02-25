<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") 
	$p_name = $_POST["points"]; 
	
	print "mr. " . $p_name . "!, we have received your message";
	print "We will contact you very soon!";

?>