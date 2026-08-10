const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

if(number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both")
}
else if(number % 5 === 0) {
    console.log("Divisible by 5");
}
else if(number % 3 === 0) {
    console.log("Divisible by 3");
}
else {
    console.log("Not Divisible");
}

