
function getNumberFactorial (a) {
    
    let result = a;

    while(a > 1) {
        a--;
        result = result * a;
    }

    return result;
}

console.log(getNumberFactorial(5));