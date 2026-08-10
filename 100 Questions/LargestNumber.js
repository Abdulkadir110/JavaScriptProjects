const prompt = require("prompt-sync")();
const firstNumber = Number(prompt("Enter the first number: "))
const secondNumber = Number(prompt("Enter the second number: "))
const thirdNumber = Number(prompt("Enter the third number: "))

let largest = 0;

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
    largest = firstNumber;
}
else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    largest = secondNumber;
}
else {
    largest = thirdNumber;
}

console.log("The Largest number is: " + largest);
