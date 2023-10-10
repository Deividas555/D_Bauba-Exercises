let funnyNumber = 12345;
funnyNumber = funnyNumber.toString();
console.log(typeof funnyNumber);

let funnyString = "123";
let num = Number(funnyString);
console.log(typeof num);

let funnyTrue = '1';
let funnyBool1 = Boolean(funnyTrue);
console.log(typeof funnyBool1);

let funnyFalse = '0';
let funnyBool2 = Boolean(funnyFalse);
console.log(typeof funnyBool2);

let isTrue = false;
let trueString = String(isTrue);
console.log(typeof trueString);

let isFalse = true;
let falseString = Number(isFalse);
console.log(typeof falseString);

let funnyText = 'JavaScript is dynamic programming language.';
let numText = Number(funnyText);
console.log(typeof numText);

let funnyNull = null;
let nullFunny = String(funnyNull);
console.log(typeof nullFunny);

let funnyUndefined = undefined;
let undefinedFunny = String(funnyUndefined);
console.log(typeof undefinedFunny);

let isTrue1 = true;
let trueFunny = String(isTrue1);
console.log(typeof trueFunny);

let isFalse1 = false;
let falseFunny =  String(isFalse1);
console.log(typeof falseFunny);

let booleanString = 'true';
let stringBoolean = Number(booleanString);
console.log(typeof stringBoolean);

let otherBooleanString = 'false';
let otherBool = Boolean(otherBooleanString);
console.log(typeof otherBool);