/* Parašykite JavaScript programą, kuri priima eilutę kaip įvestį ir keičia kiekvieno simbolio
didžiąsias ir mažąsias raides į priešingas */

let arr = 'NepaKEnktu'; 
let nu = '';

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i].toUpperCase()){
        nu += arr[i].toLowerCase();
    } else if (arr[i] === arr[i].toLowerCase()){
        nu += arr[i].toUpperCase();
    }
}

console.log(nu);