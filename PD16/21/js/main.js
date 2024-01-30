function calculate(x, y, callback) {
    let result = x + y;
    callback(result);
}
  
function logResult(result) {
    console.log(result);
}
  
calculate(3, 7, logResult);
  