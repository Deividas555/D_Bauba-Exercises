function rastiIlgiausiaZodi(eilute) {
    var zodziuMasyvas = eilute.split(' ');

    var ilgiausiasZodis = '';

    for (var i = 0; i < zodziuMasyvas.length; i++) {
        var zodis = zodziuMasyvas[i];

        if (zodis.length > ilgiausiasZodis.length) {
            ilgiausiasZodis = zodis;
        }
    }

    return ilgiausiasZodis;
}


var pradineEilute = "Hello world!";

var ilgiausiasZodis = rastiIlgiausiaZodi(pradineEilute);

console.log("Ilgiausias žodis: " + ilgiausiasZodis);
