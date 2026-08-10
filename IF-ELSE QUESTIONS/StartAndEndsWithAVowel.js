//Write a program that takes a string and returns 'Starts with Vowel', 'Ends with Vowel', 'Both', or 'Neither'.

const prompt = require("prompt-sync")();

const word = prompt("Enter a word: ").toLowerCase();
const firstLetter = word.charCodeAt(0);
const lastLetter = word
const isAlpha = (firstLetter >= 65 && firstLetter <= 90) || (firstLetter >= 97 && firstLetter <= 122);

if(isAlpha){

    if(word == "a" || firstLetter == "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
        console.log("Start with Vowel");
    }
    else{
        console.log("Consonant");
    }
}
else {
    console.log("Invalid");
}
    
