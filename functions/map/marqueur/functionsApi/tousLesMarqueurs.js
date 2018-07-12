var marqueurs = [];

function tousLesMarqueurs() {


    // Crée mes Marqueurs - Boucle autant qu'il y a de station
    for (var i = 0; i < apiStations.length; i++) {

        couleurDesMarqueurs(i);

        var mesMarqueurs = new PrototypeMarqueur(i);

        (function nombreDeMarqueur(i) {
            marqueurs[i].addListener('click', function () {
                recuperationMarqueur = apiStations[i];
                panneauSousTitre.textContent = apiStations[i].name;
                if (apiStations[i].available_bike_stands > 0) // si 0 vélo disponible, l'état de la station séléctionnée = CLOSE
                {
                    panneauEtat.innerHTML = "&nbsp" + apiStations[i].status;
                    panneauEtat.style.color = "green";
                } else {
                    panneauEtat.innerHTML = "&nbsp CLOSE";
                    panneauEtat.style.color = "red";
                }
                panneauAdresseApi.innerHTML = "&nbsp;" + apiStations[i].address;
                panneauVeloMaxApi.innerHTML = "&nbsp;" + apiStations[i].bike_stands;
                panneauVeloRestantApi.innerHTML = "&nbsp;" + recuperationMarqueur.available_bike_stands;

            });

        })
        (i);
    }


}
