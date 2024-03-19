function keistiTurini() {
    var inputElement = document.getElementById("tekstoLaukelis");
    var contentElement = document.getElementById("turinioVieta");
    var inputValue = inputElement.value.trim();
  
    if (inputValue !== "") {
      contentElement.textContent = inputValue;
    } else {
      alert("Įveskite teksto prieš keičiant turinį.");
    }
  }
  
  document.getElementById("keistiTurini").addEventListener("click", keistiTurini);
  