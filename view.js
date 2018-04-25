var body = document.body;
body.style.margin = "0";
body.style.width = "100%";
body.style.height = "100vh";
body.style.backgroundColor = "#DFF2FF";
body.style.fontSize = "15px";
body.style.overflowWrap = "wrap";

/* --------------- PAGE 1 : Diaporama explicatif de l'application --------------- */

var pageDiaporama = document.createElement('div');
body.appendChild(pageDiaporama);
pageDiaporama.id = "diaporama";
pageDiaporama.classList.add("diaporama");
pageDiaporama.style.position = "relative";
pageDiaporama.style.height = "100%";
pageDiaporama.style.width = "100%";
pageDiaporama.style.margin = "auto";

var conteneurLogo = document.createElement('div');
pageDiaporama.appendChild(conteneurLogo);
conteneurLogo.style.textAlign = "center";
conteneurLogo.style.margin = "0";

var logo = document.createElement('h1');
conteneurLogo.appendChild(logo);
logo.textContent = "Vélo'";
logo.style.display = "inline-block";
logo.style.fontSize = "400%";
logo.style.margin = "0";
logo.style.padding = "0";

var logoLettreV = document.createElement('h1');
conteneurLogo.appendChild(logoLettreV);
logoLettreV.textContent = "v";
logoLettreV.style.display = "inline-block";
logoLettreV.style.height = "35px";
logoLettreV.style.fontSize = "480%";
logoLettreV.style.color = "white";
logoLettreV.style.backgroundColor = "#DB1702";
logoLettreV.style.lineHeight = "20px";
logoLettreV.style.margin = "0";
logoLettreV.style.padding = "0";

var diaporama = document.createElement('div')
pageDiaporama.appendChild(diaporama);
diaporama.id = "diaporama"
diaporama.style.width = "80%";
diaporama.style.height = "80%";
diaporama.style.minWidth = "280px";
diaporama.style.minHeight = "400px";
diaporama.style.margin = "auto";
diaporama.style.overflow = "hidden";
diaporama.style.padding = "0";
diaporama.style.position = "relative";
diaporama.style.border = "2px solid black";
diaporama.style.borderRadius = "5px";


var ulDiaporama = document.createElement('ul');
diaporama.appendChild(ulDiaporama);
ulDiaporama.style.listStyle = "none";
ulDiaporama.style.height = "100%";
ulDiaporama.style.width = "400%";
ulDiaporama.style.margin = "0";
ulDiaporama.style.padding = "0";

var diaporamaImages = []; // Pour insérer une image différente à chaque <li> du diaporama.
var diaporamaTextes = []; // Pour insérer un texte différent à chaque <li> du diaporama.
for (var diapos = [], i = 0; i < 4; i++) {
    var liDiaporama = document.createElement('li')
    ulDiaporama.appendChild(liDiaporama);
    liDiaporama.style.float = "left";
    liDiaporama.style.display = "inline-block";
    liDiaporama.style.overflow = "hidden";
    liDiaporama.style.height = "100%";
    liDiaporama.style.width = "25%";
    liDiaporama.style.margin = "0";
    liDiaporama.style.padding = "0";

    var ConteneurImageEtTexte = document.createElement('div');
    liDiaporama.appendChild(ConteneurImageEtTexte);
    ConteneurImageEtTexte.style.position = "relative";
    ConteneurImageEtTexte.style.width = "100%";
    ConteneurImageEtTexte.style.height = "100%";
    ConteneurImageEtTexte.style.overflow = "hidden";
    ConteneurImageEtTexte.style.padding = "0";
    ConteneurImageEtTexte.style.margin = "0";
    ConteneurImageEtTexte.style.padding = "0";

    diaporamaImages[i] = document.createElement('img');
    ConteneurImageEtTexte.appendChild(diaporamaImages[i]);
    diaporamaImages[i].style.backgroundSize = "cover";
    diaporamaImages[i].style.height = "100%";
    diaporamaImages[i].style.width = "100%";
    diaporamaImages[i].style.minWidth = "400px";
    diaporamaImages[i].style.position = "absolute";
    diaporamaImages[i].style.display = "inline-block";
    diaporamaImages[i].style.overflowWrap = "break-word";

    diaporamaTextes[i] = document.createElement('p');
    ConteneurImageEtTexte.appendChild(diaporamaTextes[i]);
    diaporamaTextes[i].style.position = "absolute";
    diaporamaTextes[i].style.textAlign = "center";
    diaporamaTextes[i].style.width = "100%";
    diaporamaTextes[i].style.bottom = "0%";
    diaporamaTextes[i].style.fontSize = "30px";
    diaporamaTextes[i].style.overflowWrap = "break-word";
    diaporamaTextes[i].style.backgroundColor = "white";
    diaporamaTextes[i].style.opacity = "0.7";
    diaporamaTextes[i].style.margin = "0";
    diaporamaTextes[i].style.padding = "0";
}

diaporamaImages[0].src = "images/diapo1.jpg";
diaporamaImages[1].src = "images/diapo2.jpg";
diaporamaImages[2].src = "images/diapo3.jpg";
diaporamaImages[3].src = "images/diapo4.jpg";
diaporamaTextes[0].innerHTML = "Bienvenue chez velo'v ! </br> Le plus grand site de réservation de vélo à Lyon.";
diaporamaTextes[1].innerHTML = "Pour réserver votre vélo. </br> Cliquez sur le marqueur correspondant à la station dont vous souhaitez louer le vélo.";
diaporamaTextes[2].innerHTML = "Les informations de la station sélectionnée  </br> appraîtront à droite de la carte. </br> S'il vous convient, cliquez sur le boutton \"<span style=\"color:red;\">Réservez votre vélo !</span>\"";
diaporamaTextes[3].innerHTML = "Veuillez signez afin de finaliser votre réservation.<i class=\"fas fa-thumbs-up\"></i>";


var flecheDeGauche = document.createElement('span');
diaporama.appendChild(flecheDeGauche);
flecheDeGauche.id = "flecheGauche";
flecheDeGauche.innerHTML = "<i class=\"fas fa-chevron-circle-left fa-2x\"></i>";
flecheDeGauche.style.position = "absolute";
flecheDeGauche.style.top = "47%";
flecheDeGauche.style.left = "0.5%";
flecheDeGauche.style.color = "#5472AE";
flecheDeGauche.style.opacity = "0.8";

var flecheDeDroite = document.createElement('span');
diaporama.appendChild(flecheDeDroite);
flecheDeDroite.id = "flecheDroite";
flecheDeDroite.innerHTML = "<i class=\"fas fa-chevron-circle-right fa-2x\"></i>";
flecheDeDroite.style.position = "absolute";
flecheDeDroite.style.top = "47%";
flecheDeDroite.style.right = "0.5%";
flecheDeDroite.style.color = "#5472AE";
flecheDeDroite.style.opacity = "0.8";

/* Flèche qui ramène à la deuxieme pages */
var redirectionFleche = document.createElement('a');
pageDiaporama.appendChild(redirectionFleche);
redirectionFleche.href = "#pageMap";
redirectionFleche.style.position = "relative";
redirectionFleche.style.textAlign = "center";

var fleche = document.createElement('div');
redirectionFleche.appendChild(fleche);
fleche.innerHTML = '<i class="fa fa-angle-double-down fa-3x" aria-hidden="true"></i>';
fleche.style.color = "#5472AE";




/* ----------------------------- Fin de la PAGE 1  ----------------------------- */





/* ----------------------- PAGE : 2 Application réservation vélo ----------------------- */


var pageMap = document.createElement('div');
body.appendChild(pageMap);
pageMap.id = "pageMap";
pageMap.style.height = "100%";
pageMap.style.width = "100%";
pageMap.style.position = "relative";
pageMap.style.margin = "0";
pageMap.style.padding = "0";
pageMap.style.display = "flex";
pageMap.style.flexWrap = "wrap";
pageMap.style.justifyContent = "space-around";

var conteneurMap = document.createElement('div');
pageMap.appendChild(conteneurMap);
conteneurMap.id = "map";
conteneurMap.style.height = "99%";
conteneurMap.style.minHeight = "400px";
conteneurMap.style.width = "99%";
conteneurMap.style.minWidth = "280px";
conteneurMap.style.border = "2px solid black";
conteneurMap.style.borderRadius = "5px";
conteneurMap.style.marginTop = "1%";


// Construction "PANNEAU" HTML - CSS  \\
// Page 2 à droite de la carte\\
var panneau = document.createElement('div');
panneau.id = "panneau"
panneau.style.width = "30%";
panneau.style.minWidth = "280px";
panneau.style.position = "relative";
panneau.style.backgroundColor = "gainsboro";
panneau.style.border = "2px solid black";
panneau.style.height = "400px";
panneau.style.marginTop = "1%";

var panneauTitre = document.createElement('h1');
panneau.appendChild(panneauTitre);
panneauTitre.textContent = "Station de vélo";
panneauTitre.style.textAlign = "center";
panneauTitre.style.margin = "3% 0 1% 0";
panneauTitre.style.padding = "0";
panneauTitre.style.position = "relative";


var panneauSousTitre = document.createElement('h2');
panneau.appendChild(panneauSousTitre);
panneauSousTitre.textContent = "";
panneauSousTitre.style.textAlign = "center";
panneauSousTitre.style.margin = "0";
panneauSousTitre.style.padding = "0";
panneauSousTitre.style.position = "relative";
panneauSousTitre.style.color = "#002d51";

var panneauConteneurAdresse = document.createElement('div');
panneau.appendChild(panneauConteneurAdresse);
panneauConteneurAdresse.style.margin = "4% 0 0 1%";
panneauConteneurAdresse.style.overflowWrap = "break-word";

var panneauAdresseIntitule = document.createElement('p');
panneauConteneurAdresse.appendChild(panneauAdresseIntitule);
panneauAdresseIntitule.innerHTML = "Adresse : ";
panneauAdresseIntitule.style.display = "inline";
panneauAdresseIntitule.style.fontWeight = "bold";
panneauAdresseIntitule.style.overflowWrap = "break-word";

var panneauAdresseApi = document.createElement('p');
panneauConteneurAdresse.appendChild(panneauAdresseApi);
panneauAdresseApi.style.display = "inline";
panneauAdresseApi.style.color = "#002d51";
panneauAdresseApi.style.overflowWrap = "break-word";

var panneauConteneurVeloMax = document.createElement('div');
panneau.appendChild(panneauConteneurVeloMax);
panneauConteneurVeloMax.style.marginLeft = "1%";

var panneauVeloMaxIntitule = document.createElement('p');
panneauConteneurVeloMax.appendChild(panneauVeloMaxIntitule);
panneauVeloMaxIntitule.style.display = "inline-block";
panneauVeloMaxIntitule.textContent = "Nombre de place de la station :";
panneauVeloMaxIntitule.style.fontWeight = "bold";

var panneauVeloMaxApi = document.createElement('p');
panneauConteneurVeloMax.appendChild(panneauVeloMaxApi);
panneauVeloMaxApi.style.display = "inline-block";
panneauVeloMaxApi.style.color = "#002d51";

var panneauConteneurVeloRestant = document.createElement('div');
panneau.appendChild(panneauConteneurVeloRestant);
panneauConteneurVeloRestant.style.marginLeft = "1%";

var panneauVeloRestantIntitule = document.createElement('p');
panneauConteneurVeloRestant.appendChild(panneauVeloRestantIntitule);
panneauVeloRestantIntitule.style.display = "inline-block";
panneauVeloRestantIntitule.textContent = "Nombre de vélo disponibles :";
panneauVeloRestantIntitule.style.fontWeight = "bold";

var panneauVeloRestantApi = document.createElement('p');
panneauConteneurVeloRestant.appendChild(panneauVeloRestantApi);
panneauVeloRestantApi.style.display = "inline-block";
panneauVeloRestantApi.style.color = "#002d51";


var panneauConteneurEtat = document.createElement('div');
panneau.appendChild(panneauConteneurEtat);
panneauConteneurEtat.style.marginLeft = "1%";

var panneauEtatIntitule = document.createElement('p');
panneauConteneurEtat.appendChild(panneauEtatIntitule);
panneauEtatIntitule.style.display = "inline-block";
panneauEtatIntitule.style.fontWeight = "bold";
panneauEtatIntitule.textContent = "État de la station :";
panneauEtatIntitule.style.fontWeight = "bold";

var panneauEtat = document.createElement('p');
panneauConteneurEtat.appendChild(panneauEtat);
panneauEtat.style.display = "inline-block";


var panneauButton = document.createElement('button');
panneau.appendChild(panneauButton);
panneauButton.style.fontSize = "150%";
panneauButton.style.margin = "auto";
panneauButton.style.display = "block";
panneauButton.style.color = "";
panneauButton.style.border = "1px solid black";
panneauButton.style.borderRadius = "5px";
panneauButton.style.marginTop = "35px";



buttonIconVelo = document.createElement('span');
panneauButton.appendChild(buttonIconVelo);
buttonIconVelo.innerHTML = '<i style="color:green;" class="fas fa-bicycle"></i> Réservez votre vélo !';
// -FIN- Construction "PANNEAU" HTML - CSS  \\


/* ----------------------------- SIGNATURE ----------------------------- */

// Construction "SIGNATURE UTILISATEUR" HTML - CSS  \\  
// Page 2 à l'intérieur du panneau, tout en bas\\
var signature = document.createElement('div');
signature.id = "signature";
signature.style.position = "relative";
signature.style.height = "400px%";
signature.style.width = "280px";
signature.style.margin = "auto";
signature.style.top = "3%";
signature.style.backgroundColor = "silver";
signature.style.borderRadius = "5px";
signature.style.borderRadius = "5px";


var signatureTitre = document.createElement('h2');
signatureTitre.textContent = " Signature";
signatureTitre.style.textAlign = "center";
signatureTitre.style.color = "grey";
signatureTitre.style.margin = "0";


var signatureSuppression = document.createElement('button');
signatureSuppression.innerHTML = "<i class=\"fas fa-times\"></i>";
signatureSuppression.id = "signatureSuppression";
signatureSuppression.style.position = "absolute";
signatureSuppression.style.top = "0";
signatureSuppression.style.height = "22px";
signatureSuppression.style.right = "0";
signatureSuppression.onclick = function () /* Supprime le pannel signature  et le fond transparant au click*/ {
    panneau.removeChild(signature);
    signature.innerHTML = "";
    panneau.style.height = "400px";
};

var signatureConteneurCanvas = document.createElement('div');
signatureConteneurCanvas.style.position = "relative";
signatureConteneurCanvas.style.height = "200px"; //hauteur canvas
signatureConteneurCanvas.style.width = "250px"; // largeur canvas
signatureConteneurCanvas.style.backgroundColor = "white";
signatureConteneurCanvas.style.margin = "auto";
signatureConteneurCanvas.style.border = "1px solid black";

var signatureCanvas = document.createElement('canvas');
signatureCanvas.id = "newSignature";
signatureCanvas.style.position = "relative";
signatureCanvas.style.margin = "0";
signatureCanvas.style.padding = "0";

var signatureEffacer = document.createElement('button');
signatureEffacer.textContent = "Effacer";
signatureEffacer.style.fontSize = "20px";
signatureEffacer.style.height = "30px";
signatureEffacer.style.width = "75px";
signatureEffacer.style.margin = " 2% 0 0 20%";
signatureEffacer.style.backgroundColor = "red";
signatureEffacer.style.color = "white";
signatureEffacer.style.borderRadius = "10px";

var signatureValider = document.createElement('button');
signatureValider.textContent = "Valider";
signatureValider.style.fontSize = "20px";
signatureValider.style.height = "30px";
signatureValider.style.width = "75px";
signatureValider.style.margin = " 2% 0 0 10%";
signatureValider.style.backgroundColor = "green";
signatureValider.style.color = "white";
signatureValider.style.borderRadius = "10px";
// -FIN- Construction "SIGNATURE UTILISATEUR" HTML - CSS  \\ 



// Construction "FOOTER" HTML - CSS  \\ 
// Page 2 centrer en bas de la carte et du panneau\\
var footer = document.createElement("div");
footer.style.textAlign = "center";
footer.style.marginTop = "2%";
footer.style.fontSize = "25px";
footer.style.color = "#03224C";

var veloNonDisponible = document.createElement("span");
veloNonDisponible.style.position = "relative";
veloNonDisponible.style.color = "red";


var etatStation = document.createElement("div");
etatStation.id = "durationTimer";

var utilisateurSignature = document.createElement("img");
utilisateurSignature.id = "saveSignature";
utilisateurSignature.style.borderRadius = "5px";
utilisateurSignature.style.border = "1px solid black";
// -FIN- Construction "FOOTER" HTML - CSS  \\
