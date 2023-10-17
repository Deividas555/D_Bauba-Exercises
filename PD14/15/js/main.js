let a = 222;
let b = 245;

for (let i = a; i <= b; i++){
    if (i % 3 === 0 ){
        let c = i.toString();
        // console.log(c);
        if (c.includes('3') || c.includes('6') || c.includes('9')){
            console.log(c);
        }
    }
}



/*  Laimingi bus bilietai, kurie be
liekanos dalijasi iš trijų ir kurių bent vienas skaitmuo taip pat dalijasi iš trijų be liekanos
(skaitmenys negali būti lygūs nuliui). 

Rezultatas
231 234 237 243*/