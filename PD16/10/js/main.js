function pirmosRaidesDidziosios(eilute) {
    var zodziuMasyvas = eilute.split(' ');

    for (var i = 0; i < zodziuMasyvas.length; i++) {
        var zodis = zodziuMasyvas[i];
        zodiųMasyvas[i] = zodis.charAt(0).toUpperCase() + zodis.slice(1);
    }

    return zodziuMasyvas.join(' ');
}


var pradineEilute = "Hello world!";

var pirmosRaidesDidziosiosEilute = pirmosRaidesDidziosios(pradineEilute);

console.log("Pirmos raidės didžiosios: " + pirmosRaidesDidziosiosEilute);
