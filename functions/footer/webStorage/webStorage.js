function webStorage() {
  
    //Check browser support
    if (typeof(Storage) !== "undefined") {
        // local store, on récupère la valeur "ok"
        localStorage.setItem("VeloSelected",etatStation.innerHTML);
        // indique ce que le local à sauvegarder dans l'id "try"
        document.getElementById("time").innerHTML = localStorage.getItem("VeloSelected");
    } else {
        document.getElementById("try").innerHTML = "Désolé, votre navigateur ne supporte pas Web Storage...";
    }
}


