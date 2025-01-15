<?php
// Ensure no output before headers
ob_start();

require __DIR__ . '/../../vendor/autoload.php'; // Fix the path to autoload.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Add error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log all incoming requests
error_log("Received request from: " . $_SERVER['REMOTE_ADDR']);
error_log("Request method: " . $_SERVER['REQUEST_METHOD']);
error_log("Request headers: " . json_encode(getallheaders()));

// Update CORS headers to be more specific in development
header("Access-Control-Allow-Origin: " . (getenv('ENVIRONMENT') === 'production' ? 'https://heosa.africa' : 'http://localhost:5173'));
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit();
}

try {
    // Get raw POST data
    $rawData = file_get_contents("php://input");
    error_log("Received data: " . $rawData); // Debug log

    $data = json_decode($rawData);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("Invalid JSON data received");
    }

    // Validate required fields
    $requiredFields = ['category', 'nominee_name', 'nominee_email'];
    foreach ($requiredFields as $field) {
        if (empty($data->$field)) {
            throw new Exception("Missing required field: $field");
        }
    }

    // Email configuration
    $to = "nominations@heosa.africa";
    $subject = "New HEOSA Awards Nomination";
    
    // Create HTML email body
    $message = "
    <html>
    <body style='font-family: Arial, sans-serif; line-height: 1.6;'>
        <h2>New HEOSA Awards Nomination</h2>
        
        <h3>Nominee Details:</h3>
        <ul>
            <li>Category: {$data->category}</li>
            <li>Name: {$data->nominee_name}</li>
            <li>Email: {$data->nominee_email}</li>
            <li>Phone: {$data->nominee_phone}</li>
            <li>Institution: {$data->nominee_institution}</li>
            <li>Location: {$data->nominee_location}</li>
        </ul>

        <h3>Nominator Details:</h3>
        <ul>
            <li>Name: {$data->nominator_name}</li>
            <li>Email: {$data->nominator_email}</li>
            <li>Phone: {$data->nominator_phone}</li>
            <li>Location: {$data->nominator_location}</li>
        </ul>

        <h3>Nomination Details:</h3>
        <h4>Key Achievements:</h4>
        <p>{$data->achievements}</p>

        <h4>Healthcare Impact:</h4>
        <p>{$data->impact}</p>
    </body>
    </html>";

    // Get email configuration
    $emailConfig = require_once '../config/email.php';
    
    // Setup PHPMailer with more detailed error handling
    $mail = new PHPMailer(true);
    try {
        // Turn off SMTP debugging for production
        $mail->SMTPDebug = $emailConfig['smtp']['debug'] && getenv('ENVIRONMENT') !== 'production' ? 2 : 0;
        $mail->Debugoutput = function($str, $level) {
            error_log("SMTP Debug: $str");
        };
        
        $mail->isSMTP();
        $mail->Host = $emailConfig['smtp']['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $emailConfig['smtp']['username'];
        $mail->Password = trim($emailConfig['smtp']['password']); // Trim password to remove any whitespace
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = $emailConfig['smtp']['port'];
        
        // Optional: Add additional debugging
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        // Email settings
        $mail->setFrom($emailConfig['smtp']['from_email'], $emailConfig['smtp']['from_name']);
        $mail->addAddress('nominations@heosa.africa');
        $mail->addReplyTo($data->nominator_email);
        $mail->isHTML(true);
        $mail->Subject = "New HEOSA Awards Nomination";
        $mail->Body = $message;

        if(!$mail->send()) {
            throw new Exception("Mailer Error: " . $mail->ErrorInfo);
        }
        
        ob_end_clean(); // Clear output buffer before sending headers
        http_response_code(201);
        echo json_encode(["message" => "Nomination created successfully"]);
        
    } catch (Exception $e) {
        ob_end_clean(); // Clear output buffer before error response
        error_log("SMTP Error Details: " . $mail->ErrorInfo);
        throw new Exception("Email sending failed: " . $e->getMessage());
    }

} catch (Exception $e) {
    ob_end_clean(); // Clear output buffer before error response
    error_log("Nomination error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        "message" => "An error occurred while processing your request",
        "error" => $e->getMessage()
    ]);
}
?>