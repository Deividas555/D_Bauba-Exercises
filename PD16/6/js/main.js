function getPalindrome(numbers) {
    let tempWord = numbers.split(""); 
    let temp = tempWord.reverse();
    let result = temp.join("");

    return result;
};


console.log(getPalindrome('12345'));
