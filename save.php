<?php
// Verbindung zum Datenbankserver 
$conn = new mysqli("localhost", "root", "", "cookieclicker");

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Error:" . $conn->connect_error);
} 
	
$updateQuery = "UPDATE `cookies` SET Cookies='".$_GET['cookies']."' WHERE User='".$_GET['username']."'";
if ($conn->query($updateQuery) === TRUE) {
    echo "Saved cookies successfully!";
} else {
    echo "Error saving your cookies.";
}
 
// Schließt die Datenbankverbindung
$conn->close();
?>