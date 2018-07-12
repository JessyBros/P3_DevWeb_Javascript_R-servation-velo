function minuteur(){
    //Minuteur de 20 minutes ;
    var vingtMinutes = (60 * 20)-1,
    affiche = document.querySelector('#time');
    startTimer(vingtMinutes, affiche);

    // Le minuteur avec le footer disparait au bout de 20 minutes
    setTimeout(function()
    {
        document.querySelector('#durationTimer').innerHTML=""
        // la station récupère le vélo loué
        augmenteDeUnVeloDisponible.available_bike_stands = augmenteDeUnVeloDisponible.available_bike_stands + 1;
        panneauVeloRestantApi.innerHTML = "&nbsp;" + recuperationMarqueur.available_bike_stands;
        augmenteDeUnVeloDisponible = recuperationMarqueur;
    }
    ,1200000); // timer disparait au bout de 20 minutes.
}
    