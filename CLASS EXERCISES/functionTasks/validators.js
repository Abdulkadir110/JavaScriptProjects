function createValidator(minLength) {
    return function(word){
        return word.length >= minLength;
    }
}

console.log(createValidator(3)("hello")); 
console.log(createValidator(3)("hi")); 