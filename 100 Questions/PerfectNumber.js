const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

let sum = 0;

for (let index = 1; index < number; index++) {
    if (number % index === 0) {
        sum += i;
    }
}

if (sum === number) {
    console.log("Perfect");
}
else if (sum < number) {
    console.log("Deficient");
} 
else {
    console.log("Abundant");
}
