/**
 * @param {*} nera pakeistas sakinys be tarpu kurio ilgis bus grazintas
 * @param {*} sentence irasomas stringas kuris bus skaiciuojamas be tarpu
 * @returns 
 */

function countWithoutSpaces(sentence){
    nera = sentence.split(' ').join('');
    return nera.length;
};

console.log(countWithoutSpaces('cia tarpas'))