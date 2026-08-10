// Write a program that takes a test score and returns 'Excellent' (≥90), 'Good' (80–89), 'Fair' (70–79), 'Poor' (60–69), 'Fail' (<60).

const prompt = require("prompt-sync")();

const score = Number(prompt("Enter your test score: "));

if(score >= 90) {
    console.log("Excellent");
}
else if(score >= 80 && score < 90 ) {
    console.log("Good");
}
else if(score >= 70 && score < 80){
    console.log("Poor");
}
else if(score < 60) {
    console.log("Fail");
}
else{
    console.log("Invalid");
}

