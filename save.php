<?php
// Verbindung zum Datenbankserver 
$conn = new mysqli("localhost", "root", "", "cookieclicker");
$error = false;

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Error:" . $conn->connect_error);
} 
	
$cookieQuery = "UPDATE `cookies` SET Cookies='".$_GET['cookies']."' WHERE User='".$_GET['username']."'";
if ($conn->query($cookieQuery) === TRUE) {
    //Es passt alles
} else {
    $error = true;
}

$upgradeQuery = "UPDATE `cookies` SET Upgrades='".$_GET['upgrades']."' WHERE User='".$_GET['username']."'";
if ($conn->query($upgradeQuery) === TRUE) {
    //Es passt alles
} else {
    $error = true;
}

if(!$error){
	echo "Saved cookies successfully!";
}else{
	echo "Error saving your cookies.";
}
 
// Schließt die Datenbankverbindung
$conn->close();
?>