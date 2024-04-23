const darbuotojai =[
    {
        vardas: 'Cristiano',
        pavarde: 'Ronaldo',
        atlyginimas: 6000
    },

    {
        vardas: 'Georgina',
        pavarde: 'Rodrigez',
        atlyginimas: 3000
    }
]

function jo(obj, min){
    let grybelis = [];
    for(let i = 0; i < darbuotojai.length; i++){
        if(obj[i].atlyginimas > min){
            grybelis.push(obj[i]);
            console.log(piratasarr)
        }
    }
}


jo(darbuotojai, 4000);