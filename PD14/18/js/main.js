let a = 96;
let z = 103;
let k = 0; 

for (let i = a; i < 100; i++){
    k++;
    for(let y = z; y >= 100; y--){
        k++;
    }
}

console.log(`reikes ${k} ploksteliu`);