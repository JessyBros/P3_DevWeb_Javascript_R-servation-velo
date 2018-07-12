// Permet à l'utilisateur d'effacer sa signature.
signatureEffacer.onclick = function () { 
    var canvas = document.getElementById("newSignature");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, 1000, 1000);
};

