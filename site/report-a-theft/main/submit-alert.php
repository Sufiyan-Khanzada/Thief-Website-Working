<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "locationsdb";

$latitude = $_POST["latitude"];
$longitude = $_POST["longitude"];
$description = $_POST["description"];

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO theft_alerts (latitude, longitude, description)
  VALUES ($latitude, $longitude, '$description')";

if (mysqli_query($conn, $sql)) {
    header("Location: theft-alerts-map.php");
    exit;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
