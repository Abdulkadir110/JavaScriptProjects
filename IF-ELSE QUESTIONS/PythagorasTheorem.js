const prompt = require("prompt-sync")();

const adjacent = Number(prompt("Enter the adjacent length: "));
const opposite = Number(prompt("Enter the opposite length: "));
const hypothenus = Number(prompt("Enter the hypothenus length: "));

let squaredHypothenus = hypothenus * hypothenus;
let squaredAdjacent = adjacent * adjacent;
let squaredOpposite = opposite * opposite;

if(squaredHypothenus === squaredAdjacent + squaredOpposite) {
    console.log("Right Triangle");
}
else {
    console.log("Not Right");
}


