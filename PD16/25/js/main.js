function guessTheNumber (x) {
    let random = 20; 


    if (x < random){
        console.log('nereikia');
    } else if ( x > random) {
        console.log('reikia');
    } else if (x === random) {
        console.log('gerai');
    } else {
        console.log('gadini viska');
    }
};


guessTheNumber(19);
guessTheNumber(21);
guessTheNumber(20);
guessTheNumber('nezinau');