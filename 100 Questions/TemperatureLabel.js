const prompt = require("prompt-sync")();
const temperature = Number(prompt("Enter the temperature in celsius: "))

if(temperature < 0) {
    console.log("Freezing");
}
else if (temperature >=0 && temperature <=15) {
    console.log("Cold");
}

else if(temperature >=16 && temperature <= 25) {
    console.log("Warm");
}
else {
    console.log("Hot");
}


