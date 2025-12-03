# Backend Architecture

## Overview

The HEOSA backend is a **RESTful API** built with PHP 7.4+, designed to handle nominations, email notifications, and future database operations. It follows a simple, file-based architecture with clear separation of concerns.

## Technology Stack

### Core Technologies
- **PHP 7.4+** - Server-side scripting
- **PHPMailer 6.8** - SMTP email handling
- **Composer** - Dependency management

### Infrastructure
- **Apache/Nginx** - Web server
- **SMTP Server** - Email delivery (Port 465, SSL/TLS)
- **File System** - Static asset storage

## Directory Structure

```
api/
├── test-email.php              # Email testing endpoint
│
├── config/
│   ├── email.php              # SMTP configuration
│   └── env.php                # Environment variable loader
│
└── nominations/                # Nominations API
    ├── create.php             # POST - Submit nomination
    ├── read.php               # GET - List nominations
    ├── read_one.php           # GET - Single nomination
    ├── update.php             # PUT - Update nomination
    └── delete.php             # DELETE - Remove nomination
```

## API Architecture

### Request Processing Pipeline

```
┌─────────────────────────────────────────┐
│  1. Request Reception                   │
│  - Receive HTTP request                 │
│  - Log request details                  │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  2. CORS Handling                       │
│  - Verify origin                        │
│  - Set CORS headers                     │
│  - Handle OPTIONS preflight             │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  3. Method Validation                   │
│  - Check HTTP method                    │
│  - Return 405 if invalid               │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  4. Input Processing                    │
│  - Parse JSON body                      │
│  - Validate required fields             │
│  - Sanitize input data                  │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  5. Business Logic                      │
│  - Process nomination                   │
│  - Format email content                 │
│  - Prepare data structures              │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  6. External Service Calls              │
│  - PHPMailer SMTP                       │
│  - Database operations (future)         │
│  - File operations                      │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  7. Response Formation                  │
│  - Format JSON response                 │
│  - Set HTTP status code                 │
│  - Clear output buffer                  │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  8. Response Delivery                   │
│  - Send to client                       │
│  - Log completion                       │
└─────────────────────────────────────────┘
```

## API Endpoints

### 1. Create Nomination

**Endpoint:** `POST /api/nominations/create.php`

**Purpose:** Submit a new nomination and send email notification

**Request:**
```json
{
  "category": "Health Care Leader of the Year",
  "nominee_name": "Dr. Jane Smith",
  "nominee_email": "jane@example.com",
  "nominee_phone": "+27123456789",
  "nominee_institution": "City Hospital",
  "nominee_location": "Cape Town, SA",
  "nominator_name": "John Doe",
  "nominator_email": "john@example.com",
  "nominator_phone": "+27987654321",
  "nominator_location": "Johannesburg, SA",
  "achievements": "Led COVID-19 response...",
  "impact": "Improved patient outcomes by 40%..."
}
```

**Response (Success):**
```json
{
  "message": "Nomination created successfully"
}
```

**Response (Error):**
```json
{
  "message": "An error occurred while processing your request",
  "error": "Missing required field: nominee_name"
}
```

**Status Codes:**
- `201` - Created successfully
- `400` - Bad request (validation error)
- `500` - Server error

### 2. Test Email

**Endpoint:** `POST /api/test-email.php`

**Purpose:** Test SMTP configuration

**Request:**
```json
{
  "to": "test@example.com",
  "subject": "Test Email",
  "message": "This is a test"
}
```

### 3. Read Nominations (Planned)

**Endpoint:** `GET /api/nominations/read.php`

**Purpose:** Retrieve all nominations

**Response:**
```json
{
  "records": [
    {
      "id": 1,
      "category": "...",
      "nominee_name": "...",
      "created_at": "2025-01-15 10:30:00"
    }
  ]
}
```

## Email Service Architecture

### PHPMailer Integration

```php
// Email Configuration Flow
┌─────────────────────────────────────────┐
│  1. Load Configuration                  │
│  - Read .env file                       │
│  - Get SMTP credentials                 │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  2. Initialize PHPMailer               │
│  - Create instance                      │
│  - Set SMTP mode                        │
│  - Configure server                     │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  3. Configure SMTP                      │
│  - Host: $SMTP_HOST                     │
│  - Port: 465 (SMTPS)                    │
│  - Username: $SMTP_USERNAME             │
│  - Password: $SMTP_PASSWORD             │
│  - Encryption: SSL                      │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  4. Compose Email                       │
│  - From: $SMTP_FROM_EMAIL               │
│  - To: nominations@heosa.africa         │
│  - Subject: "New Nomination"            │
│  - Body: HTML template                  │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  5. Send Email                          │
│  - SMTP handshake                       │
│  - Transmit message                     │
│  - Verify delivery                      │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  6. Handle Response                     │
│  - Success: Return 201                  │
│  - Failure: Log error, return 500       │
└─────────────────────────────────────────┘
```

### Email Template

```html
<html>
<body style='font-family: Arial, sans-serif; line-height: 1.6;'>
  <h2>New HEOSA Awards Nomination</h2>
  
  <h3>Nominee Details:</h3>
  <ul>
    <li>Category: {$category}</li>
    <li>Name: {$nominee_name}</li>
    <li>Email: {$nominee_email}</li>
    <li>Phone: {$nominee_phone}</li>
    <li>Institution: {$nominee_institution}</li>
    <li>Location: {$nominee_location}</li>
  </ul>

  <h3>Nominator Details:</h3>
  <ul>
    <li>Name: {$nominator_name}</li>
    <li>Email: {$nominator_email}</li>
    <li>Phone: {$nominator_phone}</li>
    <li>Location: {$nominator_location}</li>
  </ul>

  <h3>Nomination Details:</h3>
  <h4>Key Achievements:</h4>
  <p>{$achievements}</p>

  <h4>Healthcare Impact:</h4>
  <p>{$impact}</p>
</body>
</html>
```

## Configuration Management

### Environment Variables

**File:** `.env` (root directory, gitignored)

```bash
# SMTP Configuration
SMTP_HOST=mail.yourserver.com
SMTP_USERNAME=noreply@heosa.africa
SMTP_PASSWORD=your_secure_password
SMTP_PORT=465
SMTP_SECURE=ssl
SMTP_FROM_EMAIL=noreply@heosa.africa
SMTP_FROM_NAME=HEOSA Awards
SMTP_DEBUG=0

# Environment
ENVIRONMENT=production
```

### Configuration Loading

```php
// api/config/env.php
function loadEnv($path) {
    if(!file_exists($path)) {
        throw new Exception(".env file not found");
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);
            
            if (!getenv($key)) {
                putenv(sprintf('%s=%s', $key, $value));
                $_ENV[$key] = $value;
            }
        }
    }
}
```

### Email Configuration

```php
// api/config/email.php
require_once __DIR__ . '/env.php';
$envPath = dirname(dirname(dirname(__DIR__))) . '/.env';
loadEnv($envPath);

return [
    'smtp' => [
        'host' => getenv('SMTP_HOST'),
        'username' => getenv('SMTP_USERNAME'),
        'password' => getenv('SMTP_PASSWORD'),
        'port' => getenv('SMTP_PORT'),
        'secure' => getenv('SMTP_SECURE'),
        'from_email' => getenv('SMTP_FROM_EMAIL'),
        'from_name' => getenv('SMTP_FROM_NAME'),
        'debug' => getenv('SMTP_DEBUG') ?? 0,
        'verify_peer' => getenv('ENVIRONMENT') === 'production'
    ]
];
```

## CORS Configuration

### Allowed Origins

```php
$allowedOrigins = [
    'http://localhost:5173',  // Vite dev server
    'http://localhost:4173',  // Vite preview server
    'https://heosa.africa',   // Production
    'http://heosa.africa'     // Production (HTTP)
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowedOrigins) || getenv('ENVIRONMENT') !== 'production') {
    header("Access-Control-Allow-Origin: " . $origin);
}
```

### CORS Headers

```php
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
```

### Preflight Handling

```php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
```

## Security Implementation

### Input Validation

```php
// Validate required fields
$requiredFields = ['category', 'nominee_name', 'nominee_email'];
foreach ($requiredFields as $field) {
    if (empty($data->$field)) {
        throw new Exception("Missing required field: $field");
    }
}
```

### Input Sanitization

```php
// Sanitize string inputs
$nominee_name = htmlspecialchars($data->nominee_name, ENT_QUOTES, 'UTF-8');
$nominee_email = filter_var($data->nominee_email, FILTER_SANITIZE_EMAIL);
```

### Email Validation

```php
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    throw new Exception("Invalid email format");
}
```

### Output Buffering

```php
// Prevent header-already-sent errors
ob_start();

// ... processing ...

ob_end_clean();
echo json_encode($response);
```

## Error Handling

### Error Logging

```php
// Log all errors to server logs
error_reporting(E_ALL);
ini_set('display_errors', 0); // Don't display to users
ini_set('log_errors', 1);

error_log("Nomination error: " . $e->getMessage());
error_log("SMTP Error Details: " . $mail->ErrorInfo);
```

### Error Responses

```php
try {
    // Business logic
} catch (Exception $e) {
    ob_end_clean();
    error_log("Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        "message" => "An error occurred while processing your request",
        "error" => getenv('ENVIRONMENT') !== 'production' 
            ? $e->getMessage() 
            : 'Internal server error'
    ]);
}
```

## Database Integration (Planned)

### Database Schema

```sql
-- Nominations table
CREATE TABLE nominations (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    nominee_name VARCHAR(255) NOT NULL,
    nominee_email VARCHAR(255) NOT NULL,
    nominee_phone VARCHAR(50),
    nominee_institution VARCHAR(255),
    nominee_location VARCHAR(255),
    nominator_name VARCHAR(255) NOT NULL,
    nominator_email VARCHAR(255) NOT NULL,
    nominator_phone VARCHAR(50),
    nominator_location VARCHAR(255),
    achievements TEXT,
    impact TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_nominations_category ON nominations(category);
CREATE INDEX idx_nominations_status ON nominations(status);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_nominations_updated_at BEFORE UPDATE
    ON nominations FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Votes table
CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    finalist_id VARCHAR(50) NOT NULL,
    vote_method VARCHAR(20) NOT NULL CHECK (vote_method IN ('sms', 'whatsapp', 'email')),
    vote_code VARCHAR(20) NOT NULL,
    voter_identifier VARCHAR(255),
    ip_address INET,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_votes_finalist ON votes(finalist_id);
CREATE INDEX idx_votes_created ON votes(created_at);
```

### PDO Connection (Future)

```php
class Database {
    private $host = "localhost";
    private $port = "5432";
    private $db_name = "heosabcc_nominations";
    private $username = "heosabcc_nominations";
    private $password = "";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "pgsql:host=" . $this->host . ";port=" . $this->port . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            error_log("Connection error: " . $exception->getMessage());
        }
        return $this->conn;
    }
}
```

## Performance Considerations

### Output Buffering

```php
ob_start();
// ... processing ...
ob_end_clean(); // Clear buffer before sending response
```

### Connection Pooling (Future)

```php
// Reuse database connections
static $connection = null;
if ($connection === null) {
    $connection = new PDO(...);
}
```

### Caching (Future)

```php
// Cache frequently accessed data
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
$cached = $redis->get('nominations_list');
```

## Monitoring & Logging

### Request Logging

```php
error_log("Received request from: " . $_SERVER['REMOTE_ADDR']);
error_log("Request method: " . $_SERVER['REQUEST_METHOD']);
error_log("Request headers: " . json_encode(getallheaders()));
```

### SMTP Debugging

```php
$mail->SMTPDebug = $emailConfig['smtp']['debug'] && getenv('ENVIRONMENT') !== 'production' ? 2 : 0;
$mail->Debugoutput = function($str, $level) {
    error_log("SMTP Debug: $str");
};
```

## Testing

### Manual Testing

```bash
# Test email endpoint
curl -X POST https://heosa.africa/api/test-email.php \
  -H "Content-Type: application/json" \
  -d '{"to":"test@example.com","subject":"Test","message":"Hello"}'

# Test nomination submission
curl -X POST https://heosa.africa/api/nominations/create.php \
  -H "Content-Type: application/json" \
  -d @nomination.json
```

### Automated Testing (Planned)

- PHPUnit for unit tests
- Integration tests for API endpoints
- Email delivery verification

## Related Documentation

- [System Architecture](./SYSTEM_ARCHITECTURE.md)
- [API Documentation](../development/API_DOCUMENTATION.md)
- [Security Guide](../security/SECURITY.md)
- [Configuration Guide](../deployment/CONFIGURATION.md)

---

**Last Updated:** December 2025  
**Maintained By:** HEOSA Development Team
