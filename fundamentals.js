const prompt = require("prompt-sync")();
const day = Number(prompt("Enter a 1-7 for days of the week: "))
//const age = prompt("Enter your age: ");

//let number;
//console.log("first Number: ", number);
//number = 4;
//console.log("second Number: ", number);
//
//console.log("NaN" != NaN);
//console.log("NaN" !== NaN);
//
//    if(age > 18) {
//        console.log("Honour");
//    }
//    else if(age <= 0) {
//        console.log("Oga, shey you no dey reason ni")        
//    }
//    else {
//        console.log("yet")
//    }
//

switch(day) {
    case 1 : 
            console.log("Sunday");
            break;
    case 2 : 
            console.log("Monday");
            break;
    case 3 : 
            console.log("Tuesday");
            break;
    case 4 : 
            console.log("Wednesday");
            break;
    case 5 : 
            console.log("Thursday");
            break;
    case 6 : 
            console.log("Friday");
            break;
    case 7 : 
            console.log("Saturday");
            break;
    default :
            console.log("Oga, shey you no dey reason ni");
}
