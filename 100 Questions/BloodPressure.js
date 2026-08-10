
const prompt = require("prompt-sync")();

const systolic = Number(prompt("Enter systolic pressure: "));
const diastolic = Number(prompt("Enter diastolic pressure: "));

if (systolic < 120 && diastolic < 80) {
    console.log("Normal");
}
else if (systolic < 130 && diastolic < 80) {
    console.log("Elevated");
}
else if (systolic < 180 && diastolic < 120) {
    console.log("High");
}
else {
    console.log("Crisis");
}
