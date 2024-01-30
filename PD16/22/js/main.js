function getFunctionName(callback) {
    if (typeof callback === 'function') {
        return callback.name;
    } else {
        return false;
    }
}

function functionPVZ() {
    
}

console.log(getFunctionName(functionPVZ));
