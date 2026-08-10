
const prompt = require("prompt-sync")();

const numberOfItems = Number(prompt("Enter the number of items: "));

if(numberOfItems >= 50){
    console.log("Bulk");
}
else if(numberOfItems >= 10 && numberOfItems < 50) {
    console.log("Standard");
}
else if(numberOfItems === 1) {
    console.log("Single");
}
else {
    console.log("Few");
}
