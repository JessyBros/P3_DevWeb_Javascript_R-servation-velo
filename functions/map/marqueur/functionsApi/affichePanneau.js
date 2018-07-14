function affichelePanneau(){
    
     // au click d'un marqueur, permet de faire apparaitre le panneau de réservation, une seule fois (permet d'évitez une boucle non utile)
     var evenementUnique = true;

     marqueurs.forEach(function (monMarqueur) {
         monMarqueur.addListener('click', function (e) {
             if (!evenementUnique) return;
             evenementUnique = false;

             pageMap.appendChild(panneau);
                 // Place les élements du FOOTER \\
    pageMap.appendChild(footer);
    footer.appendChild(veloNonDisponible);
    footer.appendChild(etatStation);
    footer.appendChild(utilisateurSignature);

             conteneurMap.style.width = "65%";
         });
     });
    
}