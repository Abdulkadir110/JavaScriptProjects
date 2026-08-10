const prompt = require("prompt-sync")();
const firstNumber = Number(prompt("Enter the first number : "))
const secondNumber = Number(prompt("Enter the second number : "))

if(firstNumber > secondNumber){
    console.log("Descending Order");
}
else if(firstNumber < secondNumber){
    console.log("Ascending Order");
}
else if(firstNumber === secondNumber){
    console.log("equal");
}
else {
    console.log("invalid");
}
