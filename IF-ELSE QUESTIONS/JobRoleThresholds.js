//Write a program that takes a person’s job role and experience (years), and returns 'Junior','Mid-Level', or 'Senior' based on thresholds.

const prompt = require("prompt-sync")();

const jobRole = prompt("Enter your job role: ");
const experience = Number(prompt("Enter your years of exprience: "));

if(experience > 0 && experience <= 3) {
    console.log("Junior");
}
else if(experience >= 4 && experience <= 8) {
    console.log("Mid - Level");
}
else if(experience > 9) {
    console.log("Senior");
}
else {
    console.log("Invalid");
}

