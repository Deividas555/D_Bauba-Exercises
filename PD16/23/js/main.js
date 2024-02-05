
function sudeti(x, y) {
    return x + y;
}


function atimti(x, y) {
    return x - y;
}


function dauginti(x, y) {
    return x * y;
}


function dalinti(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Negalima dalinti iš nulio.";
    }
}


var pirmasSkaicius = 8;
var antrasSkaicius = 4;

console.log("Sudėtis: " + sudeti(pirmasSkaicius, antrasSkaicius));
console.log("Atimtis: " + atimti(pirmasSkaicius, antrasSkaicius));
console.log("Daugyba: " + dauginti(pirmasSkaicius, antrasSkaicius));
console.log("Dalyba: " + dalinti(pirmasSkaicius, antrasSkaicius));
