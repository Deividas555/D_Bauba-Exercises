let js = "JavaScript for all";
let lifas = [];


for(let i = 0; i < js.length; i++) {
    lifas.push(js[i]);
}

let sj = '';
while (lifas.length > 0) {
    sj += lifas.pop();
}

console.log(js);
console.log(sj);

//nepatiko sitas :/