<?php
// Include fișierul de conexiune la baza de date
require_once('../includes/db_connect.php');

// Verificare metodă request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obține datele din request
    $data = json_decode(file_get_contents('php://input'), true);
    
    $nume = $conn->real_escape_string($data['nume']);
    $email = $conn->real_escape_string($data['email']);
    $telefon = $conn->real_escape_string($data['telefon']);
    $companie = $conn->real_escape_string($data['companie']);
    $ziua1 = $data['ziua1'] ? 1 : 0;
    $ziua2 = $data['ziua2'] ? 1 : 0;
    
    // Validare date
    if (empty($nume) || empty($email)) {
        echo json_encode(['success' => false, 'message' => 'Numele și emailul sunt obligatorii']);
        exit;
    }
    
    // Adaugă înregistrarea în baza de date
    $sql = "INSERT INTO participanti (nume, email, telefon, companie, ziua1, ziua2, data_inregistrare) 
            VALUES ('$nume', '$email', '$telefon', '$companie', $ziua1, $ziua2, NOW())";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Înregistrare realizată cu succes!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Eroare: ' . $conn->error]);
    }
} else {
    // Dacă nu este un POST request
    echo json_encode(['success' => false, 'message' => 'Metodă nevalidă!']);
}

$conn->close();
?>