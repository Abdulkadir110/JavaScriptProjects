const prompt = require("prompt-sync")();
const number = Number(prompt("Enter a number : "))

if(number >= 0 && number <10){
    console.log("Single Digit");
}
else if(number >=10 && number < 100) {
    console.log("Double-Digit");
}
else if(number >=100 && number <1000) {
    console.log("Triple Digit");
}
else if (number >= 1000){
    console.log("Larger");
}
else {
    console.log("Invalid");
}
