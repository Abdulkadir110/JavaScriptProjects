// function Calculate() {
//    return function add(a, b) {
//         return a + b;
//     }
//     return add;
// }

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
module.exports = { add, subtract, multiply, divide };   