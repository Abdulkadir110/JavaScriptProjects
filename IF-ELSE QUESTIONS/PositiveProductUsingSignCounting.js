const prompt = require("prompt-sync")();
const firstNumber = Number(prompt("Enter the first number: "))
const secondNumber = Number(prompt("Enter the second number: "))
const thirdNumber = Number(prompt("Enter the third number: "))

let negativeCounter = 0;


if(firstNumber < 0) {
    negativeCounter++;
}
if(secondNumber < 0) {
    negativeCounter++;
}
else if(thirdNumber < 0){
    negativeCounter++;
}

if(negativeCounter % 2 === 0) {
   console.log("+");
}
else {
    console.log("-")
}
