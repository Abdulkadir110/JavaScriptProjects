const prompt = require("prompt-sync")();
const year = Number(prompt("Enter your score: "))
let isLeapYear;

if(year % 4 === 0){
    isLeapYear = true;
}
else if(year % 100 === 0){
    isLeapYear = false;
}
else if(year % 400 === 0){
    isLeapYear = true
}
else{
    isLeapYear = false;
}

console.log(isLeapYear);
