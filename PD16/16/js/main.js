function checkIfTobulas (number) { // nezinau kaip tobulas angliskai lol
let temp = 0;
for(let i = 1; i <= number / 2; i++){
        if(number%i === 0){
            temp += i;
        }
    }   
    
    if(temp === number && temp !== 0){
    return true;

    } else {
    return false;

    }   
};


console.log(checkIfTobulas(28));