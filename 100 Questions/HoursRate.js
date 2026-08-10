const prompt = require("prompt-sync")();
const hours = Number(prompt("Enter the number of hours worked for: "));
const hoursRate = Number(prompt("Enter the hours rate: "));

let totalPay = 0;

if(hours > 40) {
    totalPay = 1.5 * hours * hoursRate;
}
else {
    totalPay = hoursRate * hours;
}

console.log("The total pay is: " + "$" + totalPay);
