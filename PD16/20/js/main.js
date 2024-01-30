function findLongestCountryName(arr){
    return arr.sort(function (a, b){
        return b.length - a.length;
    })[0]
};

let arrejus = ['Prancuzija', 'Brazilija', 'Estija', 'Liuksemburgas']

console.log(findLongestCountryName(arrejus));

// function getIlgiausias() {
//     return arr.sort(function (a, b) {
//         return b.length - a.length;
//     })[0];
// }
 
// console.log(getIlgiausias());