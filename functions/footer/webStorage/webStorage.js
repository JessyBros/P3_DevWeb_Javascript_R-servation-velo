function webStorage() {
  
    //Check browser support
    if (typeof(Storage) !== "undefined") {
        localStorage.clear();
        // local store, on récupère la valeur "ok"
        localStorage.setItem("VeloSelected",etatStation.innerHTML);
        // indique ce que le local à sauvegarder dans l'id "try"
        etatStation.innerHTML = localStorage.getItem("VeloSelected");
    } else {
        etatStation.innerHTML = "Désolé, votre navigateur ne supporte pas Web Storage...";
    }
}
