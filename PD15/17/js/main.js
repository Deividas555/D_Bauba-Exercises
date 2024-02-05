
function generuotiMasyvaNuosekliai(pradzia, pabaiga) {
    var masyvas = [];

    for (var i = pradzia; i <= pabaiga; i++) {
        masyvas.push(i);
    }

    return masyvas;
}
let arr = [];


var pradzia = 1;
var pabaiga = 5;

var naujasMasyvas = generuotiMasyvaNuosekliai(pradzia, pabaiga);

console.log("Sukurtas masyvas: " + naujasMasyvas);
