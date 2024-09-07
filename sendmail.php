<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	
	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->setFrom('ovulio@ovul.io', 'Ovulio');
	$mail->addAddress('maxxxymiron01@gmail.com');
	$mail->Subject = 'New address';


	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['mail'].'</p>';
	}

	$mail->Body = $body;

	if (!$mail->send()) {
		$massage = 'Error';
	} else {
		$massage = 'Address send';
	}

	$response = ['massage' => $massage];

	header('Content-type: application/json');
	echo json_encode($response);