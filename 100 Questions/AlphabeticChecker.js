
const prompt = require("prompt-sync")();

const word = prompt("Enter the word: ");
const code = word.charCodeAt(0);
const isAlpha = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

if(!isAlpha){
    console.log("Not Alphabetic");
}
else if(word === word.toUpperCase()){
    console.log("Uppercase");
}
else if(word === word.toLowerCase()) {
    console.log("Lowercase");
}
else {
    console.log("Mixed");
}
