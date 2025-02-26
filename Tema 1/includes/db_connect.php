<?php
// Detalii conexiune bază de date
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "codecon_db";

// Creare conexiune
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificare conexiune
if ($conn->connect_error) {
    die("Conexiunea la baza de date a eșuat: " . $conn->connect_error);
}

// Setare charset pentru caractere românești
$conn->set_charset("utf8mb4");
?>