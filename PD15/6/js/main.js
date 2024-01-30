/* Parašykite JavaScript programą, kuri randa kiek kartu pasikartoja pasirinktas masyvo
elementas */

let arr = [1, 1, 1, 5, 6, 4];
let norim = 1;
let turim = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === norim){
        turim++;
    }
}

console.log(turim);