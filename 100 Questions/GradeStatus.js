const prompt = require("prompt-sync")();
const grade = prompt("Enter grade between A - F: ").toUpperCase();


switch(grade) {
    case "A" : 
            console.log("Pass");
            break;
    case "B" : 
            console.log("Pass");
            break;
    case "C" : 
            console.log("Pass");
            break;
    case "D" : 
            console.log("Pass");
            break;
    case "E" : 
            console.log("Fail");
            break;
    case "F" : 
            console.log("Fail");
            break;
    default :
            console.log("Invalid");
}
