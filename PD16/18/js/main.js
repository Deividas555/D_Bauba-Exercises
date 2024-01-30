// Parašykite JavaScript funkciją, kuri suranda eilutėje pirmąjį nepasikartojantį simbolį.

function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
        return char;
      }
    }
    return "NERA TOKIO";
}


console.log(firstNonRepeatingCharacter('kartak'));

console.log(firstNonRepeatingCharacter('abaaba'));