const a = 120;
let dalikliai = [];
let lyginiaiDalikliai = [];
let sum = 0;
let suma = 0;

for (let i = 0; i <= a; i++) {
    if (a % i === 0) {
        dalikliai.push(i);
    }
}

for (let x = 0; x <= a; x++) {
    if (a % x === 0 && x % 2 === 0) {
        lyginiaiDalikliai.push(x);
    }
}

for (let y = 0; y < dalikliai.length; y++) {
    sum += dalikliai[y];
}

for (let g = 0; g < lyginiaiDalikliai.length; g++) {
    suma += lyginiaiDalikliai[g];
}




console.log(`lyginiai: ${dalikliai}`);
console.log(`lyginiu suma: ${sum}`);
console.log(`lyginiu dalikliai: ${suma}`);