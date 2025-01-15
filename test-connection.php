<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once 'database.php';

function testDatabaseConnection() {
    try {
        // Test connection parameters
        $params = [
            'host' => 'localhost',
            'port' => '8888',
            'database' => 'heosabcc_nominations',
            'username' => 'root',
            'password' => '',
            'socket' => '/Applications/MAMP/tmp/mysql/mysql.sock'
        ];
        
        echo "Testing connection with parameters:\n";
        print_r($params);
        
        $database = new Database();
        $conn = $database->getConnection();
        
        if ($conn) {
            echo "\n✅ Database connection successful!\n";
            echo "Server info: " . $conn->getAttribute(PDO::ATTR_SERVER_VERSION) . "\n";
            echo "Connection info: " . $conn->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";
        }
    } catch (Exception $e) {
        echo "\n❌ Connection failed: " . $e->getMessage() . "\n";
        echo "Error code: " . $e->getCode() . "\n";
        echo "Error trace:\n" . $e->getTraceAsString() . "\n";
    }
}

testDatabaseConnection();
?>