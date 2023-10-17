let senis = 1997;
let jaunas = 2018;

for(let m = senis; m <= jaunas; m++){
    if ((m % 4 == 0 && m % 100 != 0) || m % 400 == 0) {
        console.log(m);
    }
}

/*
 Parašykite programą, kuri išvestų į ekraną visus keliamuosius metus nuo n iki m (imtinai)
remiantis Grigaliaus kalendoriumi. Julijaus kalendoriuje keliamieji metai yra tie, kurie be
liekanos dalijasi iš 4, pavyzdžui 1504, 1500, 1600. Grigaliaus kalendoriuje keliamieji metai
skaičiuojami kaip Julijaus kalendoriuje, tačiau paskutiniai amžiaus metai (dalijasi iš 100 be
liekanos) yra keliamieji tik tada, jei be liekanos dalijasi iš 400, pavyzdžui 1504, 1600. 

Duomenys
1997 - 2018

Rezultatas
2000 2004 2008 2012 2016 
*/