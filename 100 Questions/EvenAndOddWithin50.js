

const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

if(number % 2 === 0 && number > 50) {
    console.log("Even and >50");
}
else if(number % 2 === 0 && number <= 50) {
    console.log("Even and <=50");
}
else if(number % 2 !== 0 && number > 50) {
    console.log("Odd and >50");
}
else if(number % 2 !== 0 && number <= 50){
    console.log("Odd and <=50");
}
