function skaiciuotiRaides(eilute) {

    var raidziuMasyvas = eilute.match(/[a-zA-Z]/g);

  
    if (raidziuMasyvas) {
        
        return raidziuMasyvas.length;
    } else {
        
        return 0;
    }
}


var pradinisTekstas = "Hello,World!";

var raidziuSkaicius = skaiciuotiRaides(pradinisTekstas);

console.log("Raidžių skaičius: " + raidziuSkaicius);
