<?php
require __DIR__ . '/../vendor/autoload.php'; // Fix the path to autoload.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    $config = require_once 'config/email.php';
    
    // Simulate nomination form data
    $nominationData = [
        'category' => 'Outstanding Achievement',
        'nominee_name' => 'John Doe',
        'nominee_email' => 'test@example.com',
        'nominator_name' => 'Jane Smith',
        'nominator_email' => 'nominator@example.com',
        'nomination_reason' => 'Outstanding contributions to the field of education in Africa'
    ];
    
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
    $mail->Subject = 'New Nomination Submission - ' . $nominationData['category'];
    
    // Create HTML body
    $body = "
        <h2>New Nomination Submission</h2>
        <p><strong>Category:</strong> {$nominationData['category']}</p>
        <p><strong>Nominee Name:</strong> {$nominationData['nominee_name']}</p>
        <p><strong>Nominee Email:</strong> {$nominationData['nominee_email']}</p>
        <p><strong>Nominator Name:</strong> {$nominationData['nominator_name']}</p>
        <p><strong>Nominator Email:</strong> {$nominationData['nominator_email']}</p>
        <p><strong>Nomination Reason:</strong> {$nominationData['nomination_reason']}</p>
    ";
    
    $mail->isHTML(true);
    $mail->Body = $body;
    $mail->AltBody = strip_tags($body); // Plain text version

    $mail->send();
    echo json_encode(["message" => "Test nomination email sent successfully"]);
} catch (Exception $e) {
    echo json_encode(["error" => $mail->ErrorInfo]);
}
