
etatStation.innerHTML = localStorage.getItem("VeloSelected");
// convertis mes seconde 60 > 100 et en decimal de 3.
var seconde = (document.querySelector('#seconde').innerHTML /60*100)|3;
var minute = document.querySelector('#minute').innerHTML;
var chrono = minute + '.' +  seconde;

startTimer((60*chrono-1), document.querySelector('#time'));
