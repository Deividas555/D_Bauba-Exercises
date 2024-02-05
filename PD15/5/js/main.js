function rikiuotiMasyva(masyvas) {
    
    masyvas.sort(function(a, b) {
        
        return a - b;
    });
}


var manoMasyvas = [5, 2, 8, 1, 3];
rikiuotiMasyva(manoMasyvas);

console.log(manoMasyvas); // Rezultatas: [1, 2, 3, 5, 8]