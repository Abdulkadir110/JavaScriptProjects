
const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

if(number > -10 && number < 10) {
    console.log("Single Digit");
}
else if(number > -100 && number < 100){
    console.log("Two Digit");
}
else if(number > -1000 && number < 1000) {
    console.log("Three Digit");
}
else {
    console.log("Larger");
}
