document.getElementById("rodytiTeksta").addEventListener("click", function() {
    var inputElement = document.getElementById("tekstoLaukelis");
    var messageElement = document.getElementById("pranesimoVieta");
    var inputValue = inputElement.value.trim();
  
    if (inputValue !== "") {
      messageElement.textContent = "Jūsų įvestas tekstas: " + inputValue;
    } else {
      messageElement.textContent = "Įveskite tekstą prieš rodydami pranešimą.";
    }
  });
  