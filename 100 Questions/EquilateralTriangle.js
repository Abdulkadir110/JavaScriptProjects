const prompt = require("prompt-sync")();
const firstLength = Number(prompt("Enter the length for the first side: "))
const secondLength = Number(prompt("Enter the length for the second side: "))
const thirdLength = Number(prompt("Enter the length for the third side: "))

if (firstLength === secondLength && secondLength === thirdLength){
    console.log("Equilateral");
}
else if(firstLength === secondLength && secondLength !== thirdLength){
    console.log("Isosceles");
}
else if(firstLength !== secondLength && secondLength === thirdLength){
    console.log("Isosceles");
}
else if(firstLength !== thirdLength && secondLength === thirdLength){
    console.log("Isosceles");
}
else if(firstLength === thirdLength && secondLength !== thirdLength){
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}
