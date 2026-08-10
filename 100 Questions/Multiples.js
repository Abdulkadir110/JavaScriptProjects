//Write a program that takes two numbers and returns 'Multiples' if one divides the other evenly, otherwise 'Not Multiples'.

const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Enter the first number: "));
const secondNumber = Number(prompt("Enter the second number: "));

if(firstNumber % secondNumber == 0) {
    console.log("Multiples");
}
else if(secondNumber % firstNumber == 0) {
    console.log("Multiples");
}
else {
    console.log("Not Multiples");
}

