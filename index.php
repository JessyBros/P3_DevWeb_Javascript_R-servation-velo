<?php
header('Access-Control-Allow-Origin: *'); 
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="Utf-8" />
    <link rel="icon" type="image/png" href="images/ico/favicon.ico" />
    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
</head>

<body>

    <script src="view/viewDiaporamaExplicative.js"></script>
    <script src="view/viewReservationVelo.js"></script>
    
     <!-- Appel Api, fonction ajaxget -->
    <script src="ajaxGet/ajax.js"></script>
    
     <!-- bibliothèque jquery -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
    
    <!-- Google map -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDD_ZAHyvZx-_3Fy66piMrK-ne4NQEoOv4&callback=initMap" async defer></script>
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>
    
    <!-- Fonctions JS -->
    <script src="functions/diaporama/diaporama.js"></script>
    
    <script src="functions/map/map.js"></script>
   
   
    <script src="functions/map/marqueur/apiLyon.js"></script>
    <script src="functions/map/marqueur/functionsApi/créationMarqueurPrototype.js"></script>
    <script src="functions/map/marqueur/functionsApi/tousLesMarqueurs.js"></script>
    <script src="functions/map/marqueur/functionsApi/couleursDesMarqueurs.js"></script>
    <script src="functions/map/marqueur/functionsApi/regroupementDesMarqueurs.js"></script>
    
    <script src="functions/map/marqueur/functionsApi/affichePanneau.js"></script>
        
    <script src="functions/panneau/clickDuPanneau.js"></script>
    <script src="functions/panneau/canvas/canvas.js"></script>
    <script src="functions/panneau/signature/signatureSupression.js"></script>
    <script src="functions/panneau/signature/signatureValidation.js"></script>
    
    <script src="functions/footer/minuteur/startTimer.js"></script>
    <script src="functions/footer/minuteur/minuteur.js"></script>
   <script src="functions/footer/webStorage/webStorage.js"></script>
   <script src="functions/footer/webStorage/recuperationWebStorage.js"></script>

</body>

</html>
