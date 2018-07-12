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


