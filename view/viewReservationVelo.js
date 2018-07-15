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
conteneurMap.style.height = "68.5%";
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
panneau.style.margin=" 1% auto auto auto";

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
pageMap.appendChild(footer);
footer.style.textAlign = "center";
footer.style.marginTop = "2%";
footer.style.fontSize = "25px";
footer.style.color = "#03224C";
footer.id = "durationTimer";
  
    
    
var veloNonDisponible = document.createElement("span");
footer.appendChild(veloNonDisponible);
veloNonDisponible.style.position = "relative";
veloNonDisponible.style.color = "red";


var etatStation = document.createElement("div");
footer.appendChild(etatStation);

var utilisateurSignature = document.createElement("img");
footer.appendChild(utilisateurSignature);
utilisateurSignature.id = "saveSignature";

// -FIN- Construction "FOOTER" HTML - CSS  \\
