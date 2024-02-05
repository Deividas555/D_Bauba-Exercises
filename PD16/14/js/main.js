function matrica() {
    let rez = '';
        for (let i = 1; i <= 555; i++){
            for (let j = 1; j <= 555; j++)
            rez += i * j +'\t';
        rez += "\n";
        }
        return rez;
}


console.log(matrica());