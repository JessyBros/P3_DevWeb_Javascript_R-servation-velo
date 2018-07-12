// Insère une map google centré sur la ville de Lyon
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 45.768896,
            lng: 4.844845
        },
        zoom: 12
    });
    /*var markerCluster = new MarkerClusterer (map, marqueurs)*/
}