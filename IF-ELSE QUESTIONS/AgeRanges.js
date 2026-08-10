// Write a program that takes a person’s age and returns 'Infant', 'Toddler', 'Child', 'Teen', 'Adult', or 'Senior' with detailed ranges

const prompt = require("prompt-sync")();

const age = Number(prompt("Enter the first number: "));

if(age > 0 && age <= 1) {
    console.log("Infant");
}
else if(age >= 1 && age <= 3) {
    console.log("Toddler");
}
else if(age >= 4 && age <= 12)v{
    console.log("Child");
}
else if(age >= 13 && age <= 19) {
    console.log("Teenager");
}
else if(age >= 20 && age <= 64) {
    console.log("Adult");
}
else if(age >= 65) {
    console.log("Senior");
}
else {
    console.log("Invalid");
}
