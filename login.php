<?php
// Verbindung zum Datenbankserver 

$conn = new mysqli("localhost", "root", "", "cookieclicker");

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Error:" . $conn->connect_error);
} 
 
// Daten aus der Datenbank abrufen
// Sämtlche Daten von Tabelle Lehrer lesen
// Abfrage definieren
$strSQL = "SELECT * FROM `cookies`";
//Abfrage ausführen
$rs = $conn->query($strSQL);

$output = null;
	
// Schleifendurchlauf durch die Variable $rs
while($zeile = mysqli_fetch_array($rs)) {
	if ($_GET['username'] == $zeile["User"] &&
		 $_GET['password'] == $zeile["Password"]) {
		$output = $zeile["Cookies"] . "," . $zeile["Upgrades"];
	}
}

if (is_null($output)){
	$insertQuery = "INSERT INTO `cookies` (`User`, `Password`, `Cookies`, `Upgrades`) VALUES ('".$_GET['username']."','".$_GET['password']."','0','0')";
	$conn->query($insertQuery);
 	$output = "0,0";
}

echo $output;
 
// Schließt die Datenbankverbindung
$conn->close();
?>