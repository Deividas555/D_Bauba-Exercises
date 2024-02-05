function skaiciuotiTrikampioPlota(a, b, c) {

    var p = (a + b + c) / 2;


    var plotas = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return plotas;
}


var krastineA = 5;
var krastineB = 6;
var krastineC = 7;

var trikampioPlotas = skaiciuotiTrikampioPlota(krastineA, krastineB, krastineC);

console.log("Trikampio plotas: " + trikampioPlotas);
