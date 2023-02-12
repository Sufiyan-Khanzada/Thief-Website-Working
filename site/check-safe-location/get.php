<?php

include '../dbconfig.php';

// Insert the form data into the database
$sql = "SELECT * FROM tb_theft";
$result = $con->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    $json_data = json_encode($rows);
} else {
    echo "0 results";
}

$con->close();
