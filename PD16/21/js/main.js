function suCallbackFunkcija(sarasas, callback) {
    var modifikuotasSarasas = [];

    for (var i = 0; i < sarasas.length; i++) {
        var modifikuotasElementas = callback(sarasas[i]);
        modifikuotasSarasas.push(modifikuotasElementas);
    }

    return modifikuotasSarasas;
}


var pradinisSarasas = [1, 2, 3, 4, 5];


function padaugintiIs2(elementas) {
    return elementas * 2;
}

var rezultatas = suCallbackFunkcija(pradinisSarasas, padaugintiIs2);

console.log("Pradinis sąrašas: " + pradinisSarasas);
console.log("Modifikuotas sąrašas (padaugintas iš 2): " + rezultatas);
