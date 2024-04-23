function kopijuotiObjekta(originalas) {
    
    if (originalas === null || typeof originalas !== 'object') {
        return originalas;
    }

    
    let kopija = Array.isArray(originalas) ? [] : {};

    
    for (let savybe in originalas) {
        if (originalas.hasOwnProperty(savybe)) {
            kopija[savybe] = kopijuotiObjekta(originalas[savybe]);
        }
    }

    return kopija;
}


let originalas = {
    vardas: 'Jonas',
    amzius: 30,
    adresas: {
        miestas: 'Vilnius',
        gatve: 'Gedimino pr.'
    }
};

let kopija = kopijuotiObjekta(originalas);


kopija.vardas = 'Petras';
kopija.adresas.miestas = 'Kaunas';

console.log('Originalas:', originalas);
console.log('Kopija:', kopija);
