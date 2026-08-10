const prompt = require("prompt-sync")();

const attendancePercentage = Number(prompt("Enter a student attendance percentage: "));
const averageScore = Number(prompt("Enter student average score: "));

let sum = attendancePercentage + averageScore;

if(sum >= 75) {
    console.log("Eligible");
}
else {
 console.log("Not Eligible");
}

