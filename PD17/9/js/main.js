function rastiIrAtspausdintiElementusSuKlase(klase) {
    var elementai = document.querySelectorAll("." + klase);
  
    if (elementai.length > 0) {
      console.log("Elementai su klase '" + klase + "':");
      elementai.forEach(function(elementas) {
        console.log(elementas);
      });
    } else {
      console.log("Nerasta elementų su klase '" + klase + "'.");
    }
  }
  
 
  rastiIrAtspausdintiElementusSuKlase("turinys");
  