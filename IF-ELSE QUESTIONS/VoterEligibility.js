const prompt = require("prompt-sync")();
const age = Number(prompt("Enter your age: "))
const voterId = prompt("Do you have voter ID (Yes/No): ");
const citizenshipStatus = prompt("Do you have a citizenship (Yes/No): ");

let isEligible;
if( age >= 18) {
    if(voterId == "yes" && citizenshipStatus == "yes") {
        isEligible = true;
    }
    else {
        isEligible = false;   
    }
}
else {
    isEligible = false;
}

console.log(isEligible);
