function rastiAntrajiMinIrMax(masyvas) {
    if (masyvas.length < 2) {
        console.log("Masyve turi būti bent du skaičiai.");
        return null;
    }

    
    var surikiuotasMasyvas = masyvas.sort(function(a, b) {
        return a - b;
    });


    var unikalusMasyvas = Array.from(new Set(surikiuotasMasyvas));

   
    if (unikalusMasyvas.length < 2) {
        console.log("Masyve turi būti bent du skaičiai.");
        return null;
    }


    return {
        antrasisMin: unikalusMasyvas[1],
        antrasisMax: unikalusMasyvas[unikalusMasyvas.length - 2]
    };
}


var skaiciuMasyvas = [3, 8, 1, 5, 2, 7];

var rezultatai = rastiAntrajiMinIrMax(skaiciuMasyvas);

if (rezultatai !== null) {
    console.log("Antrasis mažiausias skaičius: " + rezultatai.antrasisMin);
    console.log("Antrasis didžiausias skaičius: " + rezultatai.antrasisMax);
}
