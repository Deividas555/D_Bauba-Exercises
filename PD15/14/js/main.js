let arr = [7, 8, 9, 10, 11, 12 ,13];
let arr1 = [ 1, 2, 3, 4 ,5];
let arr2 = [];

arr = arr.concat(arr1);

    for(let i=0; i< arr.length; i++) {
        if(!arr2.includes(arr[i])) arr2.push(arr[i]);
    }
console.log(arr2);