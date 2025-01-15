<?php
require __DIR__ . '/../vendor/autoload.php'; // Fix the path to autoload.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    $config = require_once 'config/email.php';
    
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp']['host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp']['username'];
    $mail->Password = $config['smtp']['password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $config['smtp']['port'];
    $mail->SMTPDebug = 2; // Enable debug output

    $mail->setFrom($config['smtp']['from_email'], $config['smtp']['from_name']);
    $mail->addAddress('nominations@heosa.africa');
    $mail->Subject = 'Test Email';
    $mail->Body = 'This is a test email to verify SMTP configuration';

    $mail->send();
    echo "Test email sent successfully";
} catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
}
