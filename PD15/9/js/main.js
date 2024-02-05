

let arr = [1, 2, 3];
let sum = 0;
let suma = 1;

for (let i = 0; i < arr.length; i++){
    suma *= arr[i];
}

for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}

function skaiciuotiSumaIrSandauga(masyvas) {
    var suma = 0;
    var sandauga = 1;

    for (var i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
        sandauga *= masyvas[i];
    }

    return { suma: suma, sandauga: sandauga };
}


var sveikujuSkaiciuMasyvas = [2, 3, 4, 5];

var rezultatai = skaiciuotiSumaIrSandauga(sveikujuSkaiciuMasyvas);




console.log(sum);
console.log(suma);

