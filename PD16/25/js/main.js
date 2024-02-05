
var slaptasSkaicius = Math.floor(Math.random() * 100) + 1;


function tikrintiAtsakyma(atsakymas) {
    if (atsakymas > slaptasSkaicius) {
        return "Per didelis! Bandykite mažesnį skaičių.";
    } else if (atsakymas < slaptasSkaicius) {
        return "Per mažas! Bandykite didesnį skaičių.";
    } else {
        return "Atspėjote! Slaptas skaičius yra " + slaptasSkaicius + ".";
    }
}


function atspekSkaiciu() {
    var zaidimoPabaiga = false;

    while (!zaidimoPabaiga) {
        
        var zaidetojoAtsakymas = prompt("Atspėkite skaičių nuo 1 iki 100:");

        
        if (zaidetojoAtsakymas === null) {
            alert("Žaidimas nutrauktas.");
            zaidimoPabaiga = true;
        } else {
            
            var spejimas = parseInt(zaidetojoAtsakymas);

            
            if (!isNaN(spejimas)) {
              
                var rezultatas = tikrintiAtsakyma(spejimas);
                alert(rezultatas);

        
                if (rezultatas.includes("Atspėjote") || rezultatas.includes("nutrauktas")) {
                    zaidimoPabaiga = true;
                }
            } else {
                alert("Neteisingas įvestas skaičius. Bandykite dar kartą.");
            }
        }
    }
}


atspekSkaiciu();
