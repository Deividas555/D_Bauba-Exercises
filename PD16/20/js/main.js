function rastiIlgiausiaSaliesPavadinima(salys) {
    if (salys.length === 0) {
        console.log("Sąrašas yra tuščias.");
        return null;
    }

    var ilgiausiasPavadinimas = salys[0];

    for (var i = 1; i < salys.length; i++) {
        var pavadinimas = salys[i];

        if (pavadinimas.length > ilgiausiasPavadinimas.length) {
            ilgiausiasPavadinimas = pavadinimas;
        }
    }

    return ilgiausiasPavadinimas;
}


var saliuPavadinimai = ["Lietuva", "Latvija", "Estija", "Jungtinė Karalystė", "Vokietija"];

var ilgiausiasPavadinimas = rastiIlgiausiaSaliesPavadinima(saliuPavadinimai);

if (ilgiausiasPavadinimas !== null) {
    console.log("Ilgiausias šalies pavadinimas: " + ilgiausiasPavadinimas);
}
