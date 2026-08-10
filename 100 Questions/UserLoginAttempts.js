const prompt = require("prompt-sync")();

const loginAttempts = Number(prompt("Enter the number of login attempts: "));

if(loginAttempts > 0) {
    if(loginAttempts >= 3){
        console.log("Locked");
    }
    else if(loginAttempts === 2) {
        console.log("Warning")
    }
    else{
        console.log("Allowed")
    }
}
else if(loginAttempts === 0){
    console.log("No attempts!");
}
else {
    console.log("invalid inputs");
}
