
const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

if(number % 7 === 0 && number % 11 === 0) {
    console.log("Multiple of Both");
}
else if(number % 7 === 0) {
    console.log("Multiple of 7");
}
else if(number % 11 === 0) {
    console.log("Multiple of 11");
}
else {
    console.log("Neither");
}
