let arr = ['ilgas', 'bet', 'ilgesnis'];


function getIlgiausias() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
 
console.log(getIlgiausias());