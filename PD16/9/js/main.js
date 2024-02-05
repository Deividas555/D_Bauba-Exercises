function isdestytiPagalAbeciu(eilute) {
    return eilute.split('').sort().join('');
}


var pradineEilute = "sw";

var isdestytaEilute = isdestytiPagalAbeciu(pradineEilute);

console.log("Isdėstyta eilutė: " + isdestytaEilute);

