
const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Enter first number: "));
const secondNumber = Number(prompt("Enter second number: "));

if(firstNumber > 0 && secondNumber > 0) {
    console.log("Same Sign");
}
else if(firstNumber < 0 && secondNumber > 0) {
    console.log("Opposite Sign");
}
else if(firstNumber > 0 && secondNumber < 0) {
    console.log("Opposite Sign");
}
else if(firstNumber === 0 && secondNumber === 0) {
    console.log("Both are zero");
}
else if(firstNumber === 0 || secondNumber === 0) {
    console.log("One is Zero");
}
else{
    console.log("Invalid")
}
