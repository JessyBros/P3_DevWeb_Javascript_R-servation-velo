function couleurDesMarqueurs(i) {

    if (apiStations[i].available_bike_stands > 5) {
        icon = 'images/green-dot.png';
    } else if (apiStations[i].available_bike_stands > 0) {
        icon = 'images/blue-dot.png';
    } else {
        icon = 'images/red-dot.png';
    }
}
