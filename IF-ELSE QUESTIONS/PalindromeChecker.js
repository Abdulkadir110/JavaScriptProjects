
const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");

let length = number.length;

if(number[0] === number[length - 1] && number[1] === number[length -2]){
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}
