<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'emilmannfeldt93@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Mellösa-el kontaktformulär:  $name";
$email_body = "Du har fått ett nytt meddelande från kontaktformuläret \n\n"."Här är detaljerna:\n\nNamn: $name\n\nEmail: $email_address\n\nNummer: $phone\n\nMeddelande:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Svara: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>