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
            var marker = new google.maps.Marker({
                position: mapOptions.center,
                map: map,
                draggable: true
            });
            google.maps.event.addListener(marker, 'dragend', function(event) {
                document.getElementById("latitude").value = event.latLng.lat();
                document.getElementById("longitude").value = event.latLng.lng();
            });
        }
    </script>
</head>

<body onload="initMap()">
    <div id="map" style="height: 500px; width: 100%;"></div>
    <form action="submit-alert.php" method="post">
        <input type="hidden" id="latitude" name="latitude">
        <input type="hidden" id="longitude" name="longitude">
        <input type="text" name="description" placeholder="Theft description">
        <input type="submit" value="Submit">
    </form>
</body>

</html>