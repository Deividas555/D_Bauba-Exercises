
let studentas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 20,
    getPilnasVardas: function() {
        return this.vardas + " " + this.pavarde;
    }
};


console.log(studentas.getPilnasVardas()); 
