function apverstiSkaiciu(skaicius) {
    
    var skaiciausTekstas = skaicius.toString();

    
    var apverstasTekstas = skaiciausTekstas.split('').reverse().join('');

    
    return parseInt(apverstasTekstas, 10);
}


var pradinisSkaicius = 12345;

var apverstasSkaicius = apverstiSkaiciu(pradinisSkaicius);

console.log("Pradinis skaičius: " + pradinisSkaicius);
console.log("Apverstas skaičius: " + apverstasSkaicius);
