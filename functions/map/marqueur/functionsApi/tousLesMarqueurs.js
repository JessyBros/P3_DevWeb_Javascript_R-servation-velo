var marqueurs = [];
function tousLesMarqueurs(){ 
    
    // Objet qui permet de relié une variable (marqueur en l'occurence) sur la map crée et quel soit positionné selon l'api JCDeaux.  
     function PrototypeMarqueur(monMarqueur) {
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
        // Crée mes Marqueurs - Boucle autant qu'il y a de station
         for (var i = 0; i < apiStations.length; i++) {
              
         
     if (apiStations[i].available_bike_stands > 0) 
        {
            icon = 'images/green-dot.png';
        }
        else
        { 
            icon = 'images/red-dot.png';  
        }

         var mesMarqueurs = new PrototypeMarqueur();
        


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