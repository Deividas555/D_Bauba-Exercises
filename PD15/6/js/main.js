
elementas */

function skaiciuotiPasikartojimus(masyvas, elementas) {
    var pasikartojimuSkaicius = 0;

    for (var i = 0; i < masyvas.length; i++) {
        if (masyvas[i] === elementas) {
            pasikartojimuSkaicius++;
        }
    }

    return pasikartojimuSkaicius;
}

var manoMasyvas = [1, 2, 3, 4, 2, 5, 2];
var ieskomasElementas = 2;

var pasikartojimuSkaicius = skaiciuotiPasikartojimus(manoMasyvas, ieskomasElementas);

console.log("Elementas " + ieskomasElementas + " pasikartojo " + pasikartojimuSkaicius + " kartus.");
