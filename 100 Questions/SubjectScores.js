
const prompt = require("prompt-sync")();

const mathScore = Number(prompt("Enter your score for math: "));
const physicsScore = Number(prompt("Enter your score for physics: "));
const chemistryScore = Number(prompt("Enter your score for chemistry: "));
const biologyScore = Number(prompt("Enter your score for biology: "));

let scienceAvg = (physicsScore + chemistryScore + biologyScore) / 3;
if(scienceAvg >= 80) {
    console.log("Science Stream");
}
else if(mathScore >= 75) {
    console.log("Commerce");
}
else {
    console.log("Arts");
}

