function matrixFilmas() {
    let rez = '';
        for (let i = 1; i <= 10; i++){
            for (let j = 1; j <= 10; j++)
            rez += i * j +'\t';
        rez += "\n";
        }
        return rez;
}


console.log(matrixFilmas());