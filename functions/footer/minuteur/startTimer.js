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

            affiche.textContent = minutes + ":" + seconds;

            if (--timer < 1)
            {
                timer = duration;
            }
        }, 1000);
    }