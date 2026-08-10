// .​Write a program that takes a number and returns 'Single Digit Positive', 'Single Digit Negative','Multi-Digit', or 'Zero'.


const prompt = require("prompt-sync")();

const digit = Number(prompt("Enter a digit: "));

if(digit > -10 && digit < 10) {
    if(digit > 0 ) {
        console.log("Single Digit Positive");
    }
    else if(digit < 0) {
        console.log("Single Digit Negative");
    }
    else {
        console.log("Zero");
    }
}
else {
    console.log("Multi-Digit");
}
