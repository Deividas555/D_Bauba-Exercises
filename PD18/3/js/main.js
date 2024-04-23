
let knyga = {
    pavadinimas: "Geras žmogus",
    autorius: "Jonas Jonaitis",
    puslapiuSkaicius: 200
};


function spausdintiKnygaInfo(knyga) {
    console.log("Knyga: " + knyga.pavadinimas);
    console.log("Autorius: " + knyga.autorius);
    console.log("Puslapių skaičius: " + knyga.puslapiuSkaicius);
}


spausdintiKnygaInfo(knyga);
