
var mygtukas = document.getElementById("mygtukas");


mygtukas.addEventListener("click", function() {
  
  var atsitiktineSpalva = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  document.body.style.backgroundColor = atsitiktineSpalva;
});
