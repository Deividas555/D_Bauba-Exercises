function getEveryCombo(word, pref = '', rez = []) {
    word.split('').forEach((_, i) => {
        let newCombo = pref + word[i];

        rez.push(newCombo);

        getEveryCombo(word.slice(0, i) + word.slice(i + 1), newCombo, rez);

    });

  return rez;
  }

let wordas = '123';
console.log(getEveryCombo(wordas));
