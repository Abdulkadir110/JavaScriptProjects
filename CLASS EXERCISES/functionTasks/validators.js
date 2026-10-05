
function createValidator(minLength) {
    return function(word){
        return word.length >= minLength;
    }
}


word1 = "hello";
word2 = "hi";

validator = createValidator(3);

console.log(validator(word1)); 
console.log(validator(word2)); 