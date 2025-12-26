<?php
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $q1 = $_POST['q1'] ?? '';
    $q2 = $_POST['q2'] ?? '';
    $q3 = $_POST['q3'] ?? '';

    $stmt = $conn->prepare("INSERT INTO survey_responses (q1, q2, q3) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $q1, $q2, $q3);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    // Redirect înapoi pe pagina2.html
    header("Location: ../pagina2.html?submitted=1");
    exit();
}
?>
