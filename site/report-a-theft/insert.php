<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $coordinates = $_POST['cordinate'];
    $recipt = $_POST['recipt'];
    $message = $_POST['message'];

    $values = explode(',', trim($coordinates, '()'));
    $latitude = $values[0];
    $longitude = $values[1];

    include '../dbconfig.php';

    // Insert the form data into the database
    $sql = "INSERT INTO tb_theft (latitude, longitude, recipt, message)
            VALUES ('$latitude', '$longitude', '$recipt', '$message')";

    if ($con->query($sql) === TRUE) {
        echo "<script>window.location.href='/thief/new/checking.tabgraphix.net/check-safe-location/';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $con->close();
}
