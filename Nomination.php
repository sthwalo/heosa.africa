<?php
class Nomination {
    private $conn;
    private $table_name = "nominations";

    // Object properties
    public $id;
    public $category;
    public $nominee_name;
    public $nominee_email;
    public $nominee_phone;
    public $nominee_institution;
    public $nominator_name;
    public $nominator_email;
    public $nominator_phone;
    public $justification;
    public $created_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Create nomination
    public function create() {
        $query = "INSERT INTO " . $this->table_name . "
                SET
                    category=:category,
                    nominee_name=:nominee_name,
                    nominee_email=:nominee_email,
                    nominee_phone=:nominee_phone,
                    nominee_institution=:nominee_institution,
                    nominator_name=:nominator_name,
                    nominator_email=:nominator_email,
                    nominator_phone=:nominator_phone,
                    justification=:justification";

        $stmt = $this->conn->prepare($query);

        // Sanitize inputs
        $this->sanitizeInputs();

        // Bind values
        $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":nominee_name", $this->nominee_name);
        $stmt->bindParam(":nominee_email", $this->nominee_email);
        $stmt->bindParam(":nominee_phone", $this->nominee_phone);
        $stmt->bindParam(":nominee_institution", $this->nominee_institution);
        $stmt->bindParam(":nominator_name", $this->nominator_name);
        $stmt->bindParam(":nominator_email", $this->nominator_email);
        $stmt->bindParam(":nominator_phone", $this->nominator_phone);
        $stmt->bindParam(":justification", $this->justification);

        if($stmt->execute()) {
            $this->sendNotificationEmail();
            return true;
        }
        return false;
    }

    // Read all nominations
    public function read() {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY created_at DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    // Read single nomination
    public function readOne() {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id = ? LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if($row) {
            $this->category = $row['category'];
            $this->nominee_name = $row['nominee_name'];
            $this->nominee_email = $row['nominee_email'];
            $this->nominee_phone = $row['nominee_phone'];
            $this->nominee_institution = $row['nominee_institution'];
            $this->nominator_name = $row['nominator_name'];
            $this->nominator_email = $row['nominator_email'];
            $this->nominator_phone = $row['nominator_phone'];
            $this->justification = $row['justification'];
            $this->created_at = $row['created_at'];
            return true;
        }
        return false;
    }

    // Update nomination
    public function update() {
        $query = "UPDATE " . $this->table_name . "
                SET
                    category=:category,
                    nominee_name=:nominee_name,
                    nominee_email=:nominee_email,
                    nominee_phone=:nominee_phone,
                    nominee_institution=:nominee_institution,
                    nominator_name=:nominator_name,
                    nominator_email=:nominator_email,
                    nominator_phone=:nominator_phone,
                    justification=:justification
                WHERE
                    id=:id";

        $stmt = $this->conn->prepare($query);

        // Sanitize inputs
        $this->sanitizeInputs();

        // Bind values
        $stmt->bindParam(":id", $this->id);
        $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":nominee_name", $this->nominee_name);
        $stmt->bindParam(":nominee_email", $this->nominee_email);
        $stmt->bindParam(":nominee_phone", $this->nominee_phone);
        $stmt->bindParam(":nominee_institution", $this->nominee_institution);
        $stmt->bindParam(":nominator_name", $this->nominator_name);
        $stmt->bindParam(":nominator_email", $this->nominator_email);
        $stmt->bindParam(":nominator_phone", $this->nominator_phone);
        $stmt->bindParam(":justification", $this->justification);

        if($stmt->execute()) {
            return true;
        }
        return false;
    }

    // Delete nomination
    public function delete() {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        
        if($stmt->execute()) {
            return true;
        }
        return false;
    }

    // Input validation and sanitization
    private function sanitizeInputs() {
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->nominee_name = htmlspecialchars(strip_tags($this->nominee_name));
        $this->nominee_email = filter_var($this->nominee_email, FILTER_SANITIZE_EMAIL);
        $this->nominee_phone = htmlspecialchars(strip_tags($this->nominee_phone));
        $this->nominee_institution = htmlspecialchars(strip_tags($this->nominee_institution));
        $this->nominator_name = htmlspecialchars(strip_tags($this->nominator_name));
        $this->nominator_email = filter_var($this->nominator_email, FILTER_SANITIZE_EMAIL);
        $this->nominator_phone = htmlspecialchars(strip_tags($this->nominator_phone));
        $this->justification = htmlspecialchars(strip_tags($this->justification));
    }

    // Send notification email
    private function sendNotificationEmail() {
        try {
            $to = $this->nominee_email;
            $subject = "Nomination Received - HEOSA Awards";
            
            // Use HTML email
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $headers .= "From: HEOSA Awards <noreply@heosa.africa>" . "\r\n";
            $headers .= "Reply-To: info@heosa.africa" . "\r\n";
            
            $message = "
            <html>
            <body style='font-family: Arial, sans-serif;'>
                <h2>HEOSA Awards</h2>
                <p>Dear " . $this->nominee_name . ",</p>
                <p>You have been nominated for the " . $this->category . " category.</p>
                <p>Nominated by: " . $this->nominator_name . "</p>
                <p>Thank you for your contribution to healthcare excellence.</p>
                <p>Best regards,<br>HEOSA Awards Team</p>
            </body>
            </html>";
            
            mail($to, $subject, $message, $headers);
        } catch (Exception $e) {
            // Handle exception if needed
        }
    }
}
?>