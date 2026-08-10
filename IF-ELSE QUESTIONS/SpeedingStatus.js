//Write a program that takes a speed (km/h) and returns 'Normal', 'Fast', or 'Speeding' based on limits (e.g., ≤60, 61–100, >100).

const prompt = require("prompt-sync")();

const speed = Number(prompt("Enter the speed(km/h): "));

if(speed <= 60) {
    console.log("Normal");
}
else if(speed >= 61 && speed <= 100) {
    console.log("Fast");
}
else if(speed > 100) {
    console.log("Speeding");
}
else {
    console.log("Invalid");
}

