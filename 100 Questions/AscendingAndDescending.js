

const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");

if(number[0] < number[1] && number[1] < number[2]) {
    console.log("Ascending");
}
else if(number[0] > number[1] && number[1] > number[2]) {
    console.log("Descending");
}
else {
    console.log("Unordered");
}
