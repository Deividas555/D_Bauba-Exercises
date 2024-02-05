function pirmasNepasikartojantisSimbolis(eilute) {
    for (var i = 0; i < eilute.length; i++) {
        var simbolis = eilute[i];
        
        if (eilute.indexOf(simbolis) == eilute.lastIndexOf(simbolis)) {
            return simbolis;
        }
    }

    return null; 
}


var pradineEilute = "abcdea";

var nepasikartojantisSimbolis = pirmasNepasikartojantisSimbolis(pradineEilute);

if (nepasikartojantisSimbolis !== null) {
    console.log("Pirmas nepasikartojantis simbolis: " + nepasikartojantisSimbolis);
} else {
    console.log("Visi simboliai pasikartoja.");
}
