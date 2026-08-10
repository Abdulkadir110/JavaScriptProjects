
const prompt = require("prompt-sync")();

const string = prompt("Enter a string:");
const code = string.charCodeAt(0);
const isAlpha = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
const isDigit = (code >= 48 && code <= 57);
const isAlnum = (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

if (isDigit) {
    console.log("Numeric");
}
else if (isAlpha) {
    console.log("Alphabetic");
}
else if (isAlnum) {
    console.log("Alphanumeric");
}
else {
    console.log("Special Characters");
}
