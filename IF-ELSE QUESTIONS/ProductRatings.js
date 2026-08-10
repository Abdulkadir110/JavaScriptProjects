const prompt = require("prompt-sync")();
const rating = Number(prompt("Enter your rating within 1 - 5 range: "))


switch(rating) {
    case 1 : 
            console.log("Excellent");
            break;
    case 2 : 
            console.log("Good");
            break;
    case 3 : 
            console.log("Average");
            break;
    case 4 : 
            console.log("Poor");
            break;
    case 5 : 
            console.log("Terrible");
            break;
    default :
            console.log("Invalid, please insert number within the range.");
}
