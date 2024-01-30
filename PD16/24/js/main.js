function getBMI(height, weight){
    return (weight / (height ** 2)* 10000);
};


console.log(getBMI(190, 95));