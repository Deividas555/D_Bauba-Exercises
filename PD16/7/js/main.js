function getPalindrome(word) {
    let tempWord = word.split(""); 
    let temp = tempWord.reverse();
    let result = temp.join("");

    if(word === result){
        return true;
    } else {
        return false;
    }
    
};


console.log(getPalindrome('madam'));