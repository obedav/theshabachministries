<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Add debugging for GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo "<h3>Contact Form Debug Info</h3>";
    echo "<p><strong>Server:</strong> " . $_SERVER['HTTP_HOST'] . "</p>";
    echo "<p><strong>Environment detected:</strong> " . (in_array($_SERVER['HTTP_HOST'], ['localhost', '127.0.0.1', '::1']) || strpos($_SERVER['HTTP_HOST'], 'localhost:') === 0 ? 'DEVELOPMENT' : 'PRODUCTION') . "</p>";
    echo "<p><strong>Mail function available:</strong> " . (function_exists('mail') ? 'YES' : 'NO') . "</p>";
    
    if (file_exists('contact_emails.log')) {
        echo "<h4>Recent submissions:</h4>";
        echo "<pre>" . htmlspecialchars(file_get_contents('contact_emails.log')) . "</pre>";
    } else {
        echo "<p>No log file found.</p>";
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (
    empty($data['name']) ||
    empty($data['email']) ||
    empty($data['subject']) ||
    empty($data['message'])
) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$subject = htmlspecialchars($data['subject']);
$message = htmlspecialchars($data['message']);

if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

// Check if running on localhost/development environment
$is_localhost = in_array($_SERVER['HTTP_HOST'], ['localhost', '127.0.0.1', '::1']) || 
                strpos($_SERVER['HTTP_HOST'], 'localhost:') === 0;

// Always log for debugging purposes
$log_entry = "=== Contact Form Submission ===\n";
$log_entry .= "Date: " . date('Y-m-d H:i:s') . "\n";
$log_entry .= "Environment: " . ($is_localhost ? 'DEVELOPMENT' : 'PRODUCTION') . "\n";
$log_entry .= "Host: " . $_SERVER['HTTP_HOST'] . "\n";
$log_entry .= "Name: $name\n";
$log_entry .= "Email: $email\n";
$log_entry .= "Subject: $subject\n";
$log_entry .= "Message: $message\n";

if ($is_localhost) {
    // Development mode - only log
    $log_entry .= "Action: LOGGED ONLY\n";
    $log_entry .= "==========================================\n\n";
    
    if (file_put_contents('contact_emails.log', $log_entry, FILE_APPEND | LOCK_EX)) {
        echo json_encode(['success' => true, 'message' => 'Message received successfully! (Development mode - logged)']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to process message.']);
    }
} else {
    // Production mode - try to send email AND log
    $to = "info@theshabachministries.org";
    $email_subject = "Contact Form: $subject";
    $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    $mail_result = mail($to, $email_subject, $email_body, $headers);
    
    $log_entry .= "Action: EMAIL ATTEMPT\n";
    $log_entry .= "Mail function result: " . ($mail_result ? 'SUCCESS' : 'FAILED') . "\n";
    $log_entry .= "To: $to\n";
    $log_entry .= "==========================================\n\n";
    
    // Log regardless of email success
    file_put_contents('contact_emails.log', $log_entry, FILE_APPEND | LOCK_EX);
    
    if ($mail_result) {
        echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again or contact us directly.']);
    }
}
?>