const prompt = require("prompt-sync")();

const firstWord = prompt("Enter the first string: ");
const secondWord = prompt("Enter the second string: ");

if (firstWord.length === secondWord.length) {
    console.log("Same length");
}
else if(firstWord.length > secondWord.length) {
    console.log("First Longer");
}
else if(firstWord.length < secondWord.length) {
    console.log("Second Longer");
}

