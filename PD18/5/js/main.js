const masina ={
    variklis: 'v8',
    skaitiklis: 300654,
    langas: 'yra'
}

const masina2 ={
    variklis: 'v12',
    skaitiklis: 20654,
    langas: 'nera'
}


function STI(obj){
    if(obj.skaitiklis >= 35000){
        obj.skaitiklis -= 300000
        console.log(obj);
    }   else {
        console.log(obj);
    }
}


function WRX(obj){
    if(obj.skaitiklis < 35000){
        delete obj.puslapiu;
        console.log(obj);
    }   else {
        console.log(obj);
    }
}

STI(masina);
WRX(masina);

STI(masina2);
WRX(masina2);