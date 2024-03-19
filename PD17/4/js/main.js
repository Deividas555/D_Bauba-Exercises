document.getElementById("pakeistiSpalva").addEventListener("click", function() {
    pakeistiParagrafuSpalva("blue");
  });
  
  function pakeistiParagrafuSpalva(naujaSpalva) {
    var paragrafai = document.getElementsByTagName("p");
  
    for (var i = 0; i < paragrafai.length; i++) {
      paragrafai[i].style.color = naujaSpalva;
    }
  }
  