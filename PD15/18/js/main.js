function rastiUnikaliusElementus(masyvas) {
    
    var unikalusSet = new Set(masyvas);

    
    var unikalusMasyvas = Array.from(unikalusSet);

    return unikalusMasyvas;
}


var manoMasyvas = [1, 2, 3, 2, 4, 5, 1, 6];

var unikalusMasyvas = rastiUnikaliusElementus(manoMasyvas);

console.log("Unikalūs elementai: " + unikalusMasyvas);
