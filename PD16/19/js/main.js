function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < (arr.length - i - 1); j++){

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

let arriukas = [17, 50, 90, 40, 28, 62, 77];

console.log(bubbleSort(wrx))