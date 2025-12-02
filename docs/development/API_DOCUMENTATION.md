# API Documentation

## Overview

The HEOSA API is a RESTful service built with PHP that handles nominations, email notifications, and data management. All endpoints return JSON responses.

## Base URL

```
Development: http://localhost:4173/api (proxied)
Production:  https://heosa.africa/api
```

## Authentication

Currently, the API does not require authentication. All endpoints are publicly accessible.

**Planned:** JWT-based authentication for admin endpoints.

## Common Headers

### Request Headers

```http
Content-Type: application/json
Origin: http://localhost:4173
```

### Response Headers

```http
Content-Type: application/json; charset=UTF-8
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: POST, OPTIONS, GET, PUT, DELETE
```

## HTTP Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET request |
| 201 | Created | Successful POST (creation) |
| 400 | Bad Request | Invalid input data |
| 404 | Not Found | Resource not found |
| 405 | Method Not Allowed | Invalid HTTP method |
| 500 | Internal Server Error | Server-side error |

## Endpoints

### 1. Create Nomination

Submit a new award nomination.

**Endpoint:** `POST /api/nominations/create.php`

#### Request

```http
POST /api/nominations/create.php HTTP/1.1
Content-Type: application/json
Origin: http://localhost:4173

{
  "category": "Health Care Leader of the Year",
  "nominee_name": "Dr. Jane Smith",
  "nominee_email": "jane.smith@example.com",
  "nominee_phone": "+27123456789",
  "nominee_institution": "City General Hospital",
  "nominee_location": "Cape Town, South Africa",
  "nominator_name": "John Doe",
  "nominator_email": "john.doe@example.com",
  "nominator_phone": "+27987654321",
  "nominator_location": "Johannesburg, South Africa",
  "achievements": "Led the COVID-19 response team at City General Hospital, implementing innovative triage systems that reduced waiting times by 40%.",
  "impact": "Her leadership directly improved patient outcomes, with mortality rates decreasing by 25% during the pandemic peak."
}
```

#### Request Body Schema

```typescript
interface NominationRequest {
  category: string;              // Award category
  nominee_name: string;          // Full name
  nominee_email: string;         // Valid email
  nominee_phone?: string;        // Optional phone
  nominee_institution?: string;  // Optional institution
  nominee_location?: string;     // Optional location
  nominator_name: string;        // Full name
  nominator_email: string;       // Valid email
  nominator_phone?: string;      // Optional phone
  nominator_location?: string;   // Optional location
  achievements: string;          // Key achievements
  impact: string;                // Healthcare impact
}
```

#### Response (Success)

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "Nomination created successfully"
}
```

#### Response (Error - Validation)

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "message": "An error occurred while processing your request",
  "error": "Missing required field: nominee_name"
}
```

#### Response (Error - Server)

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "message": "An error occurred while processing your request",
  "error": "Email sending failed: SMTP connection timeout"
}
```

#### Example Usage

**JavaScript/TypeScript:**

```typescript
const submitNomination = async (data: NominationRequest) => {
  try {
    const response = await fetch('/api/nominations/create.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const result = await response.json();
    console.log('Success:', result.message);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
```

**cURL:**

```bash
curl -X POST https://heosa.africa/api/nominations/create.php \
  -H "Content-Type: application/json" \
  -d '{
    "category": "Health Care Leader of the Year",
    "nominee_name": "Dr. Jane Smith",
    "nominee_email": "jane.smith@example.com",
    "nominee_phone": "+27123456789",
    "nominee_institution": "City General Hospital",
    "nominee_location": "Cape Town, South Africa",
    "nominator_name": "John Doe",
    "nominator_email": "john.doe@example.com",
    "nominator_phone": "+27987654321",
    "nominator_location": "Johannesburg, South Africa",
    "achievements": "Led COVID-19 response team",
    "impact": "Reduced mortality rates by 25%"
  }'
```

---

### 2. Test Email

Test SMTP configuration and email delivery.

**Endpoint:** `POST /api/test-email.php`

#### Request

```http
POST /api/test-email.php HTTP/1.1
Content-Type: application/json

{
  "to": "test@example.com",
  "subject": "Test Email",
  "message": "This is a test message"
}
```

#### Response (Success)

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Email sent successfully"
}
```

---

### 3. Read Nominations (Planned)

Retrieve all nominations.

**Endpoint:** `GET /api/nominations/read.php`

**Status:** Not yet implemented (requires database)

#### Request

```http
GET /api/nominations/read.php HTTP/1.1
```

#### Response (Planned)

```json
{
  "records": [
    {
      "id": 1,
      "category": "Health Care Leader of the Year",
      "nominee_name": "Dr. Jane Smith",
      "nominee_email": "jane.smith@example.com",
      "nominee_phone": "+27123456789",
      "nominee_institution": "City General Hospital",
      "nominator_name": "John Doe",
      "nominator_email": "john.doe@example.com",
      "justification": "Led COVID-19 response...",
      "created_at": "2025-01-15 10:30:00"
    }
  ]
}
```

---

### 4. Read Single Nomination (Planned)

Retrieve a specific nomination by ID.

**Endpoint:** `GET /api/nominations/read_one.php?id={id}`

**Status:** Not yet implemented (requires database)

---

### 5. Update Nomination (Planned)

Update an existing nomination.

**Endpoint:** `PUT /api/nominations/update.php`

**Status:** Not yet implemented (requires database)

---

### 6. Delete Nomination (Planned)

Delete a nomination.

**Endpoint:** `DELETE /api/nominations/delete.php?id={id}`

**Status:** Not yet implemented (requires database)

## Email Templates

### Nomination Email

Sent to `nominations@heosa.africa` when a nomination is submitted.

**Template:**

```html
<html>
<body style='font-family: Arial, sans-serif; line-height: 1.6;'>
  <h2>New HEOSA Awards Nomination</h2>
  
  <h3>Nominee Details:</h3>
  <ul>
    <li>Category: {category}</li>
    <li>Name: {nominee_name}</li>
    <li>Email: {nominee_email}</li>
    <li>Phone: {nominee_phone}</li>
    <li>Institution: {nominee_institution}</li>
    <li>Location: {nominee_location}</li>
  </ul>

  <h3>Nominator Details:</h3>
  <ul>
    <li>Name: {nominator_name}</li>
    <li>Email: {nominator_email}</li>
    <li>Phone: {nominator_phone}</li>
    <li>Location: {nominator_location}</li>
  </ul>

  <h3>Nomination Details:</h3>
  <h4>Key Achievements:</h4>
  <p>{achievements}</p>

  <h4>Healthcare Impact:</h4>
  <p>{impact}</p>
</body>
</html>
```

## Error Codes

### Application Errors

| Code | Message | Cause |
|------|---------|-------|
| `INVALID_JSON` | Invalid JSON data received | Malformed JSON in request body |
| `MISSING_FIELD` | Missing required field: {field} | Required field not provided |
| `INVALID_EMAIL` | Invalid email format | Email doesn't match pattern |
| `SMTP_ERROR` | Email sending failed | SMTP connection or auth issue |

### Example Error Response

```json
{
  "message": "An error occurred while processing your request",
  "error": "Missing required field: nominee_email",
  "code": "MISSING_FIELD"
}
```

## Rate Limiting

**Current:** No rate limiting implemented

**Planned:**
- 10 requests per minute per IP
- 100 requests per hour per IP

## CORS Policy

### Allowed Origins

- `http://localhost:5173` (Vite dev)
- `http://localhost:4173` (Vite preview)
- `https://heosa.africa` (Production)
- `http://heosa.africa` (Production fallback)

### Allowed Methods

- `GET`
- `POST`
- `PUT`
- `DELETE`
- `OPTIONS`

### Allowed Headers

- `Content-Type`
- `Authorization`
- `X-Requested-With`

## API Versioning

**Current:** No versioning (v1 implicit)

**Planned:** URL-based versioning
```
/api/v1/nominations/create.php
/api/v2/nominations/create.php
```

## Data Validation

### Required Fields

All nominations require:
- `category`
- `nominee_name`
- `nominee_email`
- `nominator_name`
- `nominator_email`
- `achievements`
- `impact`

### Optional Fields

- `nominee_phone`
- `nominee_institution`
- `nominee_location`
- `nominator_phone`
- `nominator_location`

### Validation Rules

- **Email:** Must match RFC 5322 format
- **Phone:** No specific format (international support)
- **Text fields:** Max 10,000 characters
- **Category:** Must be valid award category

## Security

### Input Sanitization

```php
// All inputs are sanitized
$nominee_name = htmlspecialchars($data->nominee_name, ENT_QUOTES, 'UTF-8');
$nominee_email = filter_var($data->nominee_email, FILTER_SANITIZE_EMAIL);
```

### HTTPS Only

Production API requires HTTPS. HTTP requests are redirected.

### SQL Injection Prevention (Future)

When database is implemented:
```php
// PostgreSQL uses PDO with named or positional parameters
$stmt = $conn->prepare("INSERT INTO nominations (name, email) VALUES (:name, :email)");
$stmt->execute(['name' => $name, 'email' => $email]);
```

## Monitoring

### Logging

All requests and errors are logged:

```php
error_log("Received request from: " . $_SERVER['REMOTE_ADDR']);
error_log("Request method: " . $_SERVER['REQUEST_METHOD']);
error_log("Error: " . $exception->getMessage());
```

### Log Location

- Development: Console output
- Production: `/var/log/php/error.log`

## Testing

### Test Endpoints Locally

```bash
# Start local server
npm run dev

# Test nomination endpoint
curl -X POST http://localhost:4173/api/nominations/create.php \
  -H "Content-Type: application/json" \
  -d @test-nomination.json

# Test email endpoint
curl -X POST http://localhost:4173/api/test-email.php \
  -H "Content-Type: application/json" \
  -d '{"to":"test@example.com","subject":"Test","message":"Hello"}'
```

### Postman Collection

Import this collection into Postman:

```json
{
  "info": {
    "name": "HEOSA API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/"
  },
  "item": [
    {
      "name": "Create Nomination",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": "{{baseUrl}}/api/nominations/create.php",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"category\": \"Health Care Leader of the Year\",\n  \"nominee_name\": \"Dr. Jane Smith\",\n  \"nominee_email\": \"jane@example.com\"\n}"
        }
      }
    }
  ]
}
```

## Best Practices

### Making API Calls

1. **Always handle errors**
   ```typescript
   try {
     const response = await fetch(url, options);
     if (!response.ok) throw new Error('API error');
   } catch (error) {
     console.error('Failed to submit:', error);
   }
   ```

2. **Show loading states**
   ```typescript
   const [isLoading, setIsLoading] = useState(false);
   setIsLoading(true);
   await submitNomination(data);
   setIsLoading(false);
   ```

3. **Validate before sending**
   ```typescript
   if (!data.nominee_email.includes('@')) {
     alert('Invalid email');
     return;
   }
   ```

4. **Use environment variables**
   ```typescript
   const API_URL = import.meta.env.PROD 
     ? 'https://heosa.africa/api'
     : '/api';
   ```

## Future Enhancements

- [ ] JWT authentication
- [ ] Rate limiting
- [ ] API versioning
- [ ] Pagination for list endpoints
- [ ] Filtering and sorting
- [ ] Webhook support
- [ ] GraphQL endpoint
- [ ] Real-time voting API

## Related Documentation

- [Backend Architecture](../architecture/BACKEND_ARCHITECTURE.md)
- [Security Guide](../security/SECURITY.md)
- [Development Setup](./SETUP.md)

---

**Last Updated:** December 2025  
**Maintained By:** HEOSA Development Team
