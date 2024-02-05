function didesniUzNurodyta(skaicius, masyvas) {
    var rezultatai = [];

    for (var i = 0; i < masyvas.length; i++) {
        if (masyvas[i] > skaicius) {
            rezultatai.push(masyvas[i]);
        }
    }

    return rezultatai;
}


var nurodytasSkaicius = 5;
var skaiciuMasyvas = [3, 8, 1, 5, 2, 7];

var didesniUzNurodytaMasyvas = didesniUzNurodyta(nurodytasSkaicius, skaiciuMasyvas);

console.log("Elementai didesni už " + nurodytasSkaicius + ": " + didesniUzNurodytaMasyvas);
