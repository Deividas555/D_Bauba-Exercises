function istrintiPirmaLi() {
 
    var sarasas = document.getElementById("manoSarasas");
  
    
    if (sarasas) {
  
      var pirmasLi = sarasas.querySelector("li");
  
      
      if (pirmasLi) {
        
        pirmasLi.remove();
      } else {
        console.error("Pirmasis <li> elementas nerastas sąraše.");
      }
    } else {
      console.error("Sąrašas nerastas.");
    }
  }
  

  istrintiPirmaLi();
  