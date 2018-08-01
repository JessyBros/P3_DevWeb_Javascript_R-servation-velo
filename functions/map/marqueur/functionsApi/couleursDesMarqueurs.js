/* Couleurs des marqueurs varient selon le nombre de vélo disponible dans la station
 VERT supérieur à 5 vélo
 BLEU entre 1 et 5 vélo compris
 ROUGE 0 vélo */

function couleurDesMarqueurs(i) {

    if (apiStations[i].available_bike_stands > 5) {
        icon = 'images/green-dot.png';
    } else if (apiStations[i].available_bike_stands > 0) {
        icon = 'images/blue-dot.png';
    } else {
        icon = 'images/red-dot.png';
    }
}
