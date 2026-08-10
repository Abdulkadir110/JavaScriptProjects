const prompt = require("prompt-sync")();

const balance = Number(prompt("Enter your bank account balance: "));

if(balance < 100) {
    console.log("Low");
}
else if(balance >= 100 && balance <=1000){
    console.log("Medium");
}
else if(balance > 1000) {
    console.log("High");
}
else {
    console.log("Invalid inputs");
}
