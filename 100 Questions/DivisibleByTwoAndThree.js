const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));


if(number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible By Two And Three");
}
else if (number % 2 === 0 && number % 3 !== 0) {
    console.log("Divisible By Two Only");
}
else if(number % 2 !== 0 && number % 3 === 0) {
    console.log("Divisible By Three Only");
}
else {
    console.log("Not Divisible");
}
