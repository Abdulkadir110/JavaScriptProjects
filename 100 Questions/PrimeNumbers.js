const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

let primeCounter = 0;

for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
        primeCounter++;
    }
}

if (number === 0 || number === 1) {
    console.log("Neither");
} else if (count === 2) {
    console.log("Prime");
} else {
    console.log("Composite");
}
