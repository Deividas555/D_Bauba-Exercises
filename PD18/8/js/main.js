function arObjektaiVienodi(objektas1, objektas2) {
   
    if (typeof objektas1 !== 'object' || typeof objektas2 !== 'object') {
        return false;
    }

 
    if (Array.isArray(objektas1) !== Array.isArray(objektas2)) {
        return false;
    }


    let savybiuSkaicius1 = Object.keys(objektas1).length;
    let savybiuSkaicius2 = Object.keys(objektas2).length;

    if (savybiuSkaicius1 !== savybiuSkaicius2) {
        return false;
    }

   
    for (let savybe in objektas1) {
        if (!objektas2.hasOwnProperty(savybe)) {
            return false;
        }

        
        if (typeof objektas1[savybe] === 'object' && typeof objektas2[savybe] === 'object') {
            if (!arObjektaiVienodi(objektas1[savybe], objektas2[savybe])) {
                return false;
            }
        } else {
        
            if (objektas1[savybe] !== objektas2[savybe]) {
                return false;
            }
        }
    }

   
    return true;
}


let objektas1 = {
    vardas: 'Jonas',
    amzius: 30,
    adresas: {
        miestas: 'Vilnius',
        gatve: 'Gedimino pr.'
    }
};

let objektas2 = {
    vardas: 'Jonas',
    amzius: 30,
    adresas: {
        miestas: 'Vilnius',
        gatve: 'Gedimino pr.'
    }
};

console.log(arObjektaiVienodi(objektas1, objektas2)); 
