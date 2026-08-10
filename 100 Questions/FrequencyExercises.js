// Write a program that takes a person’s exercise frequency (days/week) and returns 'Inactive',Light', 'Moderate', or 'Active'.

const prompt = require("prompt-sync")();

const days = Number(prompt("Enter number of days: "));
const week = Number(prompt("Enter number of weeks: "));

if(days === 0 && week === 0) {
    console.log("Inactive");
}
else if(days <= 2 && week <= 2) {
    console.log("Light");
}
else if(days <= 3 && week <= 3) {
    console.log("Moderate");
}
else {
    console.log("Active");
}
