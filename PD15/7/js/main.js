

function keistiRaides(ivykdyti) {
    var naujaEilute = '';
    
    for (var i = 0; i < ivykdyti.length; i++) {
        var simbolis = ivykdyti[i];
        
        if (simbolis === simbolis.toLowerCase()) {
            naujaEilute += simbolis.toUpperCase();
        } else {
            naujaEilute += simbolis.toLowerCase();
        }
    }

    return naujaEilute;
}


var pradinėEilutė = "Hello, world!";
var pakeistaEilutė = keistiRaides(pradinėEilutė);

console.log("Pradinė eilutė: " + pradinėEilutė);
console.log("Pakeista eilutė: " + pakeistaEilutė);
