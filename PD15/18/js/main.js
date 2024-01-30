let arr = [1, 2, 2, 1, 3, 4, 4, 5 ,5];
let unikalus = arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x));

console.log(unikalus);

// (x => ...) zodziu iksiukas eina pro kiekviena elementa per arr | 
// jei tinka tai permeta 