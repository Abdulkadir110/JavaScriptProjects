const prompt = require("prompt-sync")();
const word = prompt("Enter any word of your choice: ")

if(word.length < 5){
    console.log("Short");
}
else if(word.length > 5 && word.length <= 10){
    console.log("Medium");
}
else {
    console.log("Long");
}

