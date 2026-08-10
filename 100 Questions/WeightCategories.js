const prompt = require("prompt-sync")();

const weight = Number(prompt("Enter your weight: "));

if(weight < 18.5){
    console.log("Underweight");
}
else if(weight >= 18.5 && weight < 25.0) {
    conole.log("Healthy");
}
else if(weight >= 25.0 && weight < 30) {
    console.log("Overweight");
}
else if(weight >= 30) {
    console.log("Obesity");
}
else {
    console.log("Invalid");
}
