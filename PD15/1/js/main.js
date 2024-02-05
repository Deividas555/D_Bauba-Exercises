
function arMasyvas(kintamasis) {
    return Array.isArray(kintamasis);
}

// Pavyzdys naudojant funkciją
var pirmasKintamasis = [1, 2, 3];
var antrasKintamasis = "ne masyvas";

console.log(arMasyvas(pirmasKintamasis)); // true
console.log(arMasyvas(antrasKintamasis)); // false