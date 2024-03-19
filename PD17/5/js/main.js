
var tevinisDiv = document.getElementById("tevinis-div");

if (tevinisDiv) {
   
    var vaikiniaiElementai = tevinisDiv.children;
    
    
    console.log("Vaikiniai elementai:");
    for (var i = 0; i < vaikiniaiElementai.length; i++) {
        console.log(vaikiniaiElementai[i]);
    }
} else {
    console.error("Tevinis div'as nerastas.");
}
