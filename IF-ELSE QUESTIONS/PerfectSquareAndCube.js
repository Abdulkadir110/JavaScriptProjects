//Write a program that takes a number and returns 'Square' if it’s a perfect square, 'Cube' if a perfect cube, 'Both' if both, otherwise 'Neither'.

const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

let squareRoot  = number ** 0.5;
let cubeRoot = number ** (1/3);
if(squareRoot * squareRoot === number) {
    console.log("Square");
}
else if(cubeRoot * cubeRoot * cubeRoot === number) {
    console.log("cube");
}
else {
    console.log("Neither");
}
