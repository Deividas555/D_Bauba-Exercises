// Parašykite JavaScript programą sveikųjų skaičių masyvo sumai ir sandaugai apskaičiuoti.

let arr = [1, 2, 3];
let sum = 0;
let suma = 1;

for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}

for (let i = 0; i < arr.length; i++){
    suma *= arr[i];
}

console.log(sum);
console.log(suma);