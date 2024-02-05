function getBMI(height, weight){
    return (weight / (height ** 5)* 500000);
};


console.log(getBMI(250, 100));