$(function(){
    
         setInterval(function(){ // Le diaporama défile toutes les 15 secondes
         $(".diaporama ul").animate({marginLeft:0},700,function(){
           $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
      }, 15000);
    
     document.addEventListener("keydown", function(e) { //réaction au click gauche
     if(e.keyCode == 37){  
            
        $(".diaporama ul").find("li:first").before($(this).find("li:last")); 
            
    }else if (e.keyCode == 39){ // reaction au click droit
       
      $(".diaporama ul").find("li:last").after($(this).find("li:first"));
    }
    
});
// Diaporama effet au click de la souris sur les flèches gauche et droite
    document.getElementById("flecheGauche").onclick = function() {$(".diaporama ul").find("li:first").before($(".diaporama ul").find("li:last"));} 
    document.getElementById("flecheDroite").onclick = function() {$(".diaporama ul").find("li:last").after($(".diaporama ul").find("li:first"));}  
});