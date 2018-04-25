 var recuperationMarqueur;

 var augmenteDeUnVeloDisponible;

 ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=2b0b963affade203194ac46ca56947dd30b8bc22", function (reponse) {
     var apiStations = JSON.parse(reponse); // Transforme la réponse en tableau d'objets JavaScript

     augmenteDeUnVeloDisponible = JSON.parse(reponse); // Transforme la réponse en tableau d'objets JavaScript


     var marqueurs = [];

     // Objet qui permet de relié une variable (marqueur en l'occurence) sur la map crée et quel soit positionné selon l'api JCDeaux.  
     function PrototypeMarqueur(monMarqueur) {
         monMarqueur = new google.maps.Marker({
             position: {
                 lat: apiStations[i].position.lat,
                 lng: apiStations[i].position.lng
             },
             map: map,
             title: apiStations[i].name
         });
         marqueurs.push(monMarqueur);

     }

     // Crée mes Marqueurs - Boucle autant qu'il y a de station
     for (var i = 0; i < apiStations.length; i++) {

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

     var evenementUnique = true;

     marqueurs.forEach(function (monMarqueur) {
         monMarqueur.addListener('click', function (e) {
             if (!evenementUnique) return;
             evenementUnique = false;

             pageMap.appendChild(panneau);

             conteneurMap.style.height = "68.5%";
             conteneurMap.style.width = "65%";
         });
     });

  



 signatureValider.onclick = function () {

     if (recuperationMarqueur.available_bike_stands == 0) { // si il n'y a plus de vélo disponible

         veloNonDisponible.innerHTML = "Désolé, la station <span style=\"color:black;\">" +
             recuperationMarqueur.name + "</span> " + " ne possède plus de vélo disponible pour le moment.";

         //cache les signatures canvas + velo réservés.
         utilisateurSignature.style.visibility = "hidden";
         etatStation.style.visibility = "hidden";

         // au bout de 5 seconde refait apparaître les signatures et le message d'indisponibilité disparait.
         setTimeout(function () {
             veloNonDisponible.textContent = "";
             utilisateurSignature.style.visibility = "visible";
             etatStation.style.visibility = "visible";
         }, 5000);
     } else {

         // lorque l'utilisateur valide un autre vélo, l'ancien récupère son vélo
         augmenteDeUnVeloDisponible.available_bike_stands = augmenteDeUnVeloDisponible.available_bike_stands + 1

         // l'api retient qu'il y a 1 vélo de réserver via l'utilisateur (utilisation de valeur global)
         recuperationMarqueur.available_bike_stands = recuperationMarqueur.available_bike_stands - 1;
         panneauVeloRestantApi.innerHTML = "&nbsp;" + recuperationMarqueur.available_bike_stands;
         augmenteDeUnVeloDisponible = recuperationMarqueur;

         // sauvegarde l'image via les données de l'url (format png)
         utilisateurSignature.style.backgroundColor = "#fff";
         var canvas = document.getElementById("newSignature");
         var dataURL = canvas.toDataURL("image/png");
         document.getElementById("saveSignature").src = dataURL;


         // fait disparaitre visuellement le mini panneau signature (canvas pour utiliasteur)
         panneau.removeChild(signature);
         signature.innerHTML = "";


         etatStation.innerHTML = "1 VÉLO RÉSERVÉ À LA STATION <span style=\"color:red;\">" +
             recuperationMarqueur.name + "</span> POUR " + "<span style=\"color:red;\"id=\"time\">20:00</span> MINUTES !";

         panneau.style.height = "400px";

  
         if (recuperationMarqueur.available_bike_stands == 0) // si à cause de la réservation, il n'y a plus de vélo, état de la station = CLOSE
         {
             panneauEtat.innerHTML = "&nbsp CLOSE";
             panneauEtat.style.color = "red";
         }


     }

       function startTimer(duration, affiche) 
    {
        var timer = duration, minutes, seconds;
        setInterval(function ()
        {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            affiche.textContent = minutes + ":" + seconds;

            if (--timer < 1)
            {
                timer = duration;
            }
            }, 1000);
        }

        var vingtMinutes = (60 * 20)-1,
        affiche = document.querySelector('#time');
        startTimer(vingtMinutes, affiche);

        setTimeout(function()
        {
            document.querySelector('durationTimer').innerHTML=""
        }
        ,1200000); // timer disparait au bout de 20 minutes.
 };
      });

