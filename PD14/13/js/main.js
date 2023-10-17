for (let i = 1; i <= 300; i++) {    
    let dalikliai = 0;

    for (let y = 1; y <= i; y++) {
        if (i % y === 0) {
            dalikliai++;
        }
    }

    if (dalikliai === 5) {
        console.log(i);
    }
}
