function sumaisytiMasyvoElementus(masyvas) {
    var indeksas, laikinas;

    for (var i = masyvas.length - 1; i > 0; i--) {
        
        indeksas = Math.floor(Math.random() * (i + 1));

        laikinas = masyvas[i];
        masyvas[i] = masyvas[indeksas];
        masyvas[indeksas] = laikinas;
    }

    return masyvas;
}


var manoMasyvas = [1, 2, 3, 4, 5];

var sumaisytiElementai = sumaisytiMasyvoElementus(manoMasyvas);

console.log("Sumaišyti elementai: " + sumaisytiElementai);
