const prompt = require("prompt-sync")();
const firstNumber = Number(prompt("Enter the first number: "))
const secondNumber = Number(prompt("Enter the second number: "))

let sum = firstNumber + secondNumber;

if(sum > 0) {
    console.log("Positive");
}
else if(sum < 0){
    console.log("Negative");
}

else {
    console.log("Zero");
}
