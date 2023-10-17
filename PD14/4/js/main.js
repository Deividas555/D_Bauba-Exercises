const Sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
const Vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
const Kovas = [-3, -2.5, 0, 5, 9.5, 11.2];
let S1 = 0;
let V1 = 0;
let K1 = 0;

for (let i = 0; i < Sausis.length; i++) {
    S1 += Sausis[i];
}

for (let i = 0; i < Vasaris.length; i++) {
    V1 += Vasaris[i];
}

for (let i = 0; i < Kovas.length; i++) {
    K1 += Kovas[i];
}

let avgS1 = S1 / Sausis.length;
let avgV1 = V1 / Vasaris.length;
let avgK1 = K1 / Kovas.length;

let bendras = (S1 + V1 + K1) / (Sausis.length + Vasaris.length + Kovas.length);


console.log(`vidutinio Sausio temp: ${avgS1.toFixed(2)}`);
console.log(`vidutinio Vasario temp: ${avgV1.toFixed(2)}`);
console.log(`vidutinio Kovo temp: ${avgK1.toFixed(2)}`);
console.log(`bendras temp: ${bendras.toFixed(2)}`);