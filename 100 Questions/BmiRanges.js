const prompt = require("prompt-sync")();

const weight = Number(prompt("Enter your weight: "));
const height = Number(prompt("Enter your height: "));

let bmi = weight / height * height;

if(bmi < 18.5){
    console.log("Underweight");
}
else if(bmi >= 18.5 && bmi < 25.0) {
    conole.log("Healthy");
}
else if(bmi >= 25.0 && bmi < 30) {
    console.log("Overweight");
}
else if(bmi >= 30) {
    console.log("Obesity");
}
else {
    console.log("Invalid");
}
