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


        
    } else { // Si il y a des vélo disponible

        // lorque l'utilisateur valide un autre vélo, l'ancien récupère son vélo
        augmenteDeUnVeloDisponible.available_bike_stands = augmenteDeUnVeloDisponible.available_bike_stands + 1;

        // l'api retient qu'il y a 1 vélo de réserver via l'utilisateur (utilisation de valeur global)
        recuperationMarqueur.available_bike_stands = recuperationMarqueur.available_bike_stands - 1;
        panneauVeloRestantApi.innerHTML = "&nbsp;" + recuperationMarqueur.available_bike_stands;
        augmenteDeUnVeloDisponible = recuperationMarqueur;

        // sauvegarde l'image via les données de l'url (format png)
        utilisateurSignature.style.backgroundColor = "#fff";
        var canvas = document.getElementById("newSignature");
        var dataURL = canvas.toDataURL("image/png");
        document.getElementById("saveSignature").src = dataURL;


        // fait disparaitre visuellement le mini panneau signature (canvas pour l'utiliasteur)
        panneau.removeChild(signature);
        signature.innerHTML = "";


        etatStation.innerHTML = "1 VÉLO RÉSERVÉ À LA STATION <span style=\"color:red;\">" +
            recuperationMarqueur.name + "</span> POUR " + "<span style=\"color:red;\"id=\"time\"><span id=\"minute\">20</span>.<span id=\"seconde\">00</span></span> MINUTES !";

        panneau.style.height = "400px";

        if (recuperationMarqueur.available_bike_stands == 0) // si à cause de la réservation, il n'y a plus de vélo, état de la station = CLOSE
        {
            panneauEtat.innerHTML = "&nbsp CLOSE";
            panneauEtat.style.color = "red";
        }
        
        utilisateurSignature.style.borderRadius = "5px";
        utilisateurSignature.style.border = "1px solid black";
        
        webStorage();

    }

    minuteur();

};
   