
let skaiciuotuvas = {
    rezultatas: 0, 


    sudeti: function(x) {
        this.rezultatas += x;
    },


    atimti: function(x) {
        this.rezultatas -= x;
    },


    dauginti: function(x) {
        this.rezultatas *= x;
    },


    dalinti: function(x) {
        if (x !== 0) {
            this.rezultatas /= x;
        } else {
            console.log("Dalyba iš nulio negalima.");
        }
    },

    
    kvadratu: function() {
        this.rezultatas *= this.rezultatas;
    },

   
    saknis: function() {
        this.rezultatas = Math.sqrt(this.rezultatas);
    }
};


skaiciuotuvas.sin = function() {
    this.rezultatas = Math.sin(this.rezultatas);
};


skaiciuotuvas.cos = function() {
    this.rezultatas = Math.cos(this.rezultatas);
};


skaiciuotuvas.log = function() {
    this.rezultatas = Math.log(this.rezultatas);
};


skaiciuotuvas.sudeti(5); 
skaiciuotuvas.dauginti(3); 
skaiciuotuvas.sin(); 
skaiciuotuvas.kvadratu(); 
console.log("Rezultatas:", skaiciuotuvas.rezultatas); 
