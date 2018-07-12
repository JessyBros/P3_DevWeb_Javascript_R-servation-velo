/* Lorsque l'utilisateur choisis une stations particulière, et appuie sur le boutton "Réservez un vélo"

un block signature appararait sous forme de CANVAS afin de procédé à la validation final de la réservation.*/    

panneauButton.onclick = function () {

    panneau.style.height = "660px";

    // Place les élements de la SIGNATURE \\
    panneau.appendChild(signature);
    signature.appendChild(signatureTitre);
    signature.appendChild(signatureSuppression);
    signature.appendChild(signatureConteneurCanvas);
    signatureConteneurCanvas.appendChild(signatureCanvas);
    signature.appendChild(signatureEffacer);
    signature.appendChild(signatureValider);

    canvas();
   
}; // Fin de l'acolade panneauButton.onclick()
