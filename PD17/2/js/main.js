
var elementas = document.getElementById("pakeistinas-elementas");


if (elementas) {

    elementas.textContent = "Sveiki, aš esu naujas tekstas!";
} else {
    console.error("Elementas su ID 'pakeistinas-elementas' nerastas.");
}
