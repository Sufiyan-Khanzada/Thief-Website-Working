<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $coordinates = $_POST['cordinate'];
    $name = $_POST['fname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $damage = $_POST['damage'];
    $lostitem = $_POST['lostitem'];
    $reportReg = $_POST['report'];
    $reportNo = $_POST['reportNo'];

    $values = explode(',', trim($coordinates, '()'));
    $latitude = $values[0];
    $longitude = $values[1];

    include '../dbconfig.php';

    // Insert the form data into the database
    $sql = "INSERT INTO tb_theft (latitude, longitude, uname, uemail, uphone, udamage, ulostitem,ureportReg,ureportNo)
            VALUES ('$latitude', '$longitude', '$name', '$email', '$phone', '$damage', '$lostitem', '$reportReg', '$reportNo')";

    if ($con->query($sql) === TRUE) {
        echo "<script>window.location.href='/Thief-Website-Working/site/check-safe-location/';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $con->close();
}
