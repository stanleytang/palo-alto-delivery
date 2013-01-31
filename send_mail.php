<?php
//If the form is submitted
if(isset($_POST['submit'])) {

	//Check to make sure that the name field is not empty
	if(trim($_POST['contactname']) == '') {
		$hasError = true;
	} else {
		$name = trim($_POST['contactname']);
	}

	//Check to make sure that the phone field is not empty
	if(trim($_POST['phone']) == '') {
		$hasError = true;
	} else {
		$phone = trim($_POST['phone']);
	}

	//Check to make sure that the delivery field is not empty
	if(trim($_POST['delivery']) == '') {
		$hasError = true;
	} else {
		$delivery = trim($_POST['delivery']);
	}
	
	//Check to make sure that the physical address field is not empty
	if(trim($_POST['address']) == '') {
		$hasError = true;
	} else {
		$address = trim($_POST['address']);
	}

	//Check to make sure that the restaurant field is not empty
	if(trim($_POST['restaurant']) == '') {
		$hasError = true;
	} else {
		$restaurant = trim($_POST['restaurant']);
	}

	//Check to make sure sure that a valid email address is submitted
	if(trim($_POST['email']) == '')  {
		$hasError = true;
	} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
		$hasError = true;
	} else {
		$email = trim($_POST['email']);
	}

	//Check to make sure comments were entered
	if(trim($_POST['message']) == '') {
		$hasError = true;
	} else {
		if(function_exists('stripslashes')) {
			$comments = stripslashes(trim($_POST['message']));
		} else {
			$comments = trim($_POST['message']);
		}
	}

	//If there is no error, send the email
	if(!isset($hasError)) {
		$emailTo = 'support@paloaltodelivery.com'; // Put your own email address here
		$body = "Name: $name \n\nEmail: $email \n\nPhone Number: $phone \n\nPhysical address: $address \n\nDesired Delivery Time: $delivery \n\nRestaurant: $restaurant \n\nOrder Info:\n $comments";
		$headers = 'From: Palo Alto Delivery <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
		$subject = "Order Request";

		mail($emailTo, $subject, $body, $headers);
		$emailSent = true;
	}
		
	if (isset($hasError)) {
		echo "<p>Please check if you've filled all the fields with valid information and try again. Thank you.</p>" . 
		  "<a href='/'>Go Back</a>";
	}

	if(isset($emailSent) && $emailSent == true) {
		echo "<p><strong>Order Successfully Sent!</strong></p>" . 
			"<p>Thank you for using Palo Alto Delivery. Your order was successfully sent and we&rsquo;ll call you back to confirm your order as soon as possible.</p>";
	}
}
?>