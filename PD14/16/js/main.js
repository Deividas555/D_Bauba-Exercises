let n = 3;
let m = [18, 10, 10];
let m1 = 0;
let k = 0;

for (let i = 0; i < m.length; i++) {
    if (m[i] >= 20) {
        k++;
    }
    m1 += m[i];
}

let vid = m1 / n;
console.log(`m = ${vid.toFixed(1)}`);
console.log(`k = ${k}`);
/* Gydytojas per dieną priima n pacientų. Pirmas pacientas gydytojo kabinete praleido m1
minučių, antras – m2 ir t.t. Parenkite programą, skaičiuojančią, kiek minučių m gydytojas
vidutiniškai skiria vienam pacientui ir kelių pacientų k vizitai buvo ilgesni kaip 20 minučių.
Duomenys
n = 3: pirmas užtrūko 18 minučių, o antras ir trečias po 10 minučių*/