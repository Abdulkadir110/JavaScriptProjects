
const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");

if(number[0] < number[1] && number[1] < number[2]) {
    console.log("Increasing Digits");
}
else if(number[0] > number[1] && number[1] > number[2]) {
    console.log("Decreasing Digits");
}
else {
    console.log("Mixed");
}
