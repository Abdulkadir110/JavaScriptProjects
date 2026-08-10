
const prompt = require("prompt-sync")();

const hours = Number(prompt("Enter your sleep hours:"));

if (hours < 6) {
    console.log("Too Little");
}
else if (hours <= 8) {
    console.log("Adequate");
}
else {
    console.log("Too Much");
}
