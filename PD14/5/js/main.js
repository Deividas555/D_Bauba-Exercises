const darbuotojai = [824.25, 1225.12, 459.16, 1500];
console.log(`pries ${darbuotojai}`);

for (let i = 0; i < darbuotojai.length; i++) {
    const atlyg = darbuotojai[i];

    if (atlyg > 1000) {
        darbuotojai[i] = (atlyg + atlyg * 0.05).toFixed(2);
    } else {
        darbuotojai[i] = (atlyg + atlyg * 0.10).toFixed(2);
    }
}
console.log(`po ${darbuotojai}`);
