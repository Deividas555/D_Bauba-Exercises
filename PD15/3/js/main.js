function isvestiPaskutiniElementa(masyvas) {
    if (masyvas.length === 0) {
      
        console.log("Masyvas yra tuščias.");
    } else {
        
        var paskutinisElementas = masyvas[masyvas.length - 1];
        console.log("Paskutinis masyvo elementas: " + paskutinisElementas);
    }
}

var manoMasyvas = [1, 2, 3, 4, 5];
isvestiPaskutiniElementa(manoMasyvas);