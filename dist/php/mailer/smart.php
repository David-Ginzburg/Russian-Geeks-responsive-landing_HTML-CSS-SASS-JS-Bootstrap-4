<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$company = $_POST['company'];
$descr = $_POST['descr'];
$formTitle = $_POST['form-title'];
$url = $_POST['url'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.beget.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '*';                 // Наш логин
$mail->Password = '*';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('*, 'Заявка от ' . $name . '');   // От кого письмо
$mail->addAddress('*');

//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Оставлена заявка от ' . $name . ' по форме ' . $formTitle . '';

if ($formTitle == 'contacts') {
	$mail->Body    = '
	Пользователь оставил данные: <br><br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . '<br>
	Название компании: ' . $company . '<br>
	Описание идеи: ' . $descr . '<br>
	Форма: ' . $formTitle . ' <br>
	Ссылка: ' . $url . '';
} elseif ($formTitle == 'order' or  $formTitle == 'description' or $formTitle == 'assignment') {
	$mail->Body    = '
	Пользователь оставил данные: <br><br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . '<br>
	Форма: ' . $formTitle . ' <br>
	Ссылка: ' . $url . '';
} else {
	$mail->Body    = '
	Пользователь оставил данные: <br><br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	Форма: ' . $formTitle . ' <br>
	Ссылка: ' . $url . '';
}

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>