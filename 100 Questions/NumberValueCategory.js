//Write a program that takes a number and returns 'Low Risk', 'Medium Risk', or 'High Risk'
//based on its value (e.g., 0–30, 31–70, 71–100).

const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

if(number >= 0 && number <= 30) {
    console.log("Low Risk");
}
else if(number >= 31 && number <= 70) {
    console.log("Medium Risk");
}
else if(number >= 71 && number <= 100) {
    console.log("High Risk");
}
else {
    console.log("invalid");
}
