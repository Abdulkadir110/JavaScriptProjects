//​Write a program that takes a time in 24-hour format (e.g., 14) and returns 'Morning', 'Afternoon', 'Evening', or 'Night'

const prompt = require("prompt-sync")();

const time = prompt("Enter a time in 24-hour format: ");

if(time >= 0 && time <= 12) {
    console.log("Morning");
}
else if(time > 12 && time < 17) {
    console.log("Afternoon");
}
else if(time >= 17 && time < 20) {
    console.log("Evening");
}
else if(time >= 20 && time <= 23 ) {
    console.log("Night");
}
else {
    console.log("Invalid")
}
