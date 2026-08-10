const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

if(number > 0) {
    if(number % 2 === 0) {
        console.log("Positive Even");
    }
    else {
        console.log("Positive Odd");
    }
}
else if(number < 0){
    if(number % 2 === 0){
        console.log("Negative Even");
    }
    else {
        console.log("Negative Odd");
    }
}
else if(number === 0) {
    console.log("Zero");
}
else {
    console.log("Enter a number please!!");
}
