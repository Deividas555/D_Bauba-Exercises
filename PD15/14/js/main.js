let arr = [1, 2, 3, 4, 4, 5 ,5];
let arr1 = [ 3, 4, 5, 6 ,7];
let arr2 = [];

arr = arr.concat(arr1);

    for(let i=0; i< arr.length; i++) {
        if(!arr2.includes(arr[i])) arr2.push(arr[i]);
    }
console.log(arr2);