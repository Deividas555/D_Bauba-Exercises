
let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 30,
    lytis: "vyras"
};


function spausdintiZmogausSavybes(zmogus) {
    for (let savybe in zmogus) {
        console.log(savybe + ": " + zmogus[savybe]);
    }
}


spausdintiZmogausSavybes(zmogus);
