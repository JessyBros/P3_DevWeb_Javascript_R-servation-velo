// Objet qui permet de relié une variable (marqueur en l'occurence) sur la map crée et quel soit positionné selon l'api JCDeaux.  
function PrototypeMarqueur(i, monMarqueur) {
    monMarqueur = new google.maps.Marker({
        position: {
            lat: apiStations[i].position.lat,
            lng: apiStations[i].position.lng
        },
        map: map,
        title: apiStations[i].name,
        icon: icon
    });
    marqueurs.push(monMarqueur);

}


