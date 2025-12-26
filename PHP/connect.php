<?php
$servername = "localhost";
$username = "root";  // implicit în XAMPP
$password = "";      // implicit în XAMPP
$dbname = "cotroceni_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
