function rikiuotiPagalAbc() {
    var sarasas = document.getElementById("sarasas");
    var sarasoElementai = Array.from(sarasas.getElementsByTagName("li"));
  
    sarasoElementai.sort(function(a, b) {
      return a.textContent.localeCompare(b.textContent);
    });
  
    sarasas.innerHTML = '';
    sarasoElementai.forEach(function(elementas) {
      sarasas.appendChild(elementas);
    });
  }
  
  function rikiuotiAtvirksciaiPagalAbc() {
    var sarasas = document.getElementById("sarasas");
    var sarasoElementai = Array.from(sarasas.getElementsByTagName("li"));
  
    sarasoElementai.sort(function(a, b) {
      return b.textContent.localeCompare(a.textContent);
    });
  
    sarasas.innerHTML = '';
    sarasoElementai.forEach(function(elementas) {
      sarasas.appendChild(elementas);
    });
  }
  
  document.getElementById("rusiuotiAbc").addEventListener("click", rikiuotiPagalAbc);
  document.getElementById("rusiuotiAtv").addEventListener("click", rikiuotiAtvirksciaiPagalAbc);
  