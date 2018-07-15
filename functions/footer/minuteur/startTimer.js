/* Minuteur en minutes et secondes,
  Effet = -1 seconde par seconde*/
function startTimer(duration, affiche) 
    {
        var timer = duration, minutes, seconds;
        setInterval(function ()
        {
            
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            affiche.innerHTML = "<span id=\"minute\">" + minutes + "</span>" + "." + "<span id=\"seconde\">" + seconds + "</span>";
           
            localStorage.setItem("VeloSelected",etatStation.innerHTML);
            
            if (--timer < 1)
            {
                timer = duration;
            }
            
            if (document.querySelector('#minute').innerHTML == "00" & document.querySelector('#seconde').innerHTML == "01") 
    {
        footer.innerHTML ="";
       etatStation.innerHTML ="";
       utilisateurSignature.innerHTML ="";
       etatStation.innerHTML ="";
        localStorage.clear();
        
    }
            
        }, 1000);
                    

    }

 
 /*affiche.innerHTML ="<span id=\"minute\">" + minutes + "</span>" + : +"<span id=\"seconde\">" + seconds + "</span>";*/