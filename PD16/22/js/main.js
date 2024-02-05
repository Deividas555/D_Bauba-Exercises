function getFunctionName(callback) {
    if (typeof callback === 'function') {
        return callback.name;
    } else {
        return false;
    }
}

function functionwrx() {
    
}

console.log(getFunctionName(functionwrx));