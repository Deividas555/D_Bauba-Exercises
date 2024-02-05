function trecioMaziausioElementoPaieska(masyvas) {
   
    var unikalusMasyvas = Array.from(new Set(masyvas));

  
    var surikiuotasMasyvas = unikalusMasyvas.sort(function(a, b) {
        return a - b;
    });

    
    if (surikiuotasMasyvas.length >= 3) {
        
        return surikiuotasMasyvas[2];
    } else {
        console.log("Masyve nėra pakankamai daug skaičių.");
        return null;
    }
}


var skaiciuMasyvas = [4, 1, 6, 2, 6, 1, 3, 4];

var treciasMaziausias = trecioMaziausioElementoPaieska(skaiciuMasyvas);

if (treciasMaziausias !== null) {
    console.log("Trečias mažiausias skaičius: " + treciasMaziausias);
}
