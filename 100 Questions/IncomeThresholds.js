

const prompt = require("prompt-sync")();

const income = Number(prompt("Enter your income: $"));

if(income > 0 && income <= 5000){
    console.log("Low");
}
else if(income > 5000 && income < 10000){
    console.log("Middle");
}
else if(income >= 10000) {
    console.log("High");
}
else {
    console.log("Invalid");
}

