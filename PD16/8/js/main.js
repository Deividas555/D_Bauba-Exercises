function generuotiRaidiniusDerinius(zodis) {
    var rezultatai = [];

    function derinti(likusiosRaides, derinys) {
        if (likusiosRaides.length === 0) {
            rezultatai.push(derinys);
            return;
        }

        for (var i = 0; i < likusiosRaides.length; i++) {
            derinti(
                likusiosRaides.slice(0, i) + likusiosRaides.slice(i + 1),
                derinys + likusiosRaides[i]
            );
        }
    }

    derinti(zodis, '');

    return rezultatai;
}


var pradinisZodis = "cat";

var deriniai = generuotiRaidiniusDerinius(pradinisZodis);

console.log("Raidiniai deriniai:", deriniai);
