// Insertion des marqueurs avec fonctionnalités

//valeur global 

var recuperationMarqueur;
var augmenteDeUnVeloDisponible;
var apiStations;

 ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=2b0b963affade203194ac46ca56947dd30b8bc22", function (reponse) {
     
     // Transforme la réponse en tableau d'objets JavaScript
     apiStations = JSON.parse(reponse); 
     augmenteDeUnVeloDisponible = JSON.parse(reponse); 


    tousLesMarqueurs();
    affichelePanneau();

});