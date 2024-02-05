function konvertuotiCelsijausIFarenheita(celsijausLaipsniai) {
    var farenheitoLaipsniai = (celsijausLaipsniai * 9/5) + 32;
    return farenheitoLaipsniai;
}


var celsijausTemperatura = 25;
var farenheitoTemperatura = konvertuotiCelsijausIFarenheita(celsijausTemperatura);

console.log(celsijausTemperatura + " Celsijaus laipsniai yra " + farenheitoTemperatura + " Farenheito laipsniai.");
