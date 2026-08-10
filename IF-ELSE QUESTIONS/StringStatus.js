const prompt = require("prompt-sync")();

const word = prompt("Enter a word: ").toLowerCase();
const code = word.charCodeAt(0);
const isAlpha = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

if(isAlpha){

    if(code === "a" || code === "e" || code === "i" || code === "o" || code === "u") {
        console.log("Vowel");
    }
    else{
        console.log("Consonant");
    }
}
else {
    console.log("Invalid");
}
    
