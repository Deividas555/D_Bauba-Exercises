let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let arrResults = [];

for (let i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1){
        arrResults.push(arr1[i]);
    }
}


for (let i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) == -1){
        arrResults.push(arr2[i]);
    }
}

console.log(arrResults);