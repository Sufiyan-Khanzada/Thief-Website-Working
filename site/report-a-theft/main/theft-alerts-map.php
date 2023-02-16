<!DOCTYPE html>
<html>

<head>
    <title>Theft Alert Map</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    <script>
        function initMap() {
            var mapOptions = {
                center: {
                    lat: 37.7749,
                    lng: -122.4194
                },
                zoom: 8
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            <?php
            $servername = "localhost";
            $username = "database_username";
            $password = "database_password";
            $dbname = "database_name";

            $conn = mysqli_connect($servername, $username, $password, $dbname);
            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }

            $sql = "SELECT latitude, longitude, description, count(*) as count FROM theft_alerts GROUP BY latitude, longitude";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
                    $latitude = $row["latitude"];
                    $longitude = $row["longitude"];
                    $description = $row["description"];
                    $count = $row["count"];
            ?>
                    var marker = new google.maps.Marker({
                        position: {
                            lat: <?php echo $latitude; ?>,
                            lng: <?php echo $longitude; ?>
                        },
                        map: map,
                        title: "<?php echo $description; ?>"
                    });
                    var infowindow = new google.maps.InfoWindow({
                        content: "Theft count: <?php echo $count; ?>"
                    });
                    marker.addListener('mouseover', function() {
                        infowindow.open(map, marker);
                    });
                    marker.addListener('mouseout', function() {
                        infowindow.close();
                    });
            <?php
                }
            }
            mysqli_close($conn);
            ?>
        }
    </script>
</head>

<body onload="initMap()">
    <div id="map" style="height: 500px; width: 100%;"></div>
</body>

</html>