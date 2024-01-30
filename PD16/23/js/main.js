function calculateWtv(x, action, y){
    switch (action) {

        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '**':
            return x ** y;
        case '%':
            return x % y;

        default:
            return ('error');
    }
}

console.log(calculateWtv(12, "+", 2));
console.log(calculateWtv(12, "-", 2));
console.log(calculateWtv(12, "*", 2));
console.log(calculateWtv(12, "/", 2));
console.log(calculateWtv(12, "**", 2));
console.log(calculateWtv(12, "%", 2));
console.log(calculateWtv(12, "rezultatai", 2));

