function isvestiNaNIndeksus(masyvas) {
    for (var i = 0; i < masyvas.length; i++) {
        if (isNaN(masyvas[i])) {
            console.log("Indeksas su NaN reikšme: " + i);
        }
    }
}


var masyvasSuNaN = [1, 2, NaN, 4, NaN, 6];

ivestiNaNIndeksus(masyvasSuNaN);
