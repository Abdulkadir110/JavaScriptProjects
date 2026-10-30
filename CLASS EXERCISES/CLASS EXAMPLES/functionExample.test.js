const { add, subtract, multiply, divide } = require("./functionExample");

test("Calculate the sum of two numbers", () => {  
    let firstNumber = 2;
    let secondNumber = 3;
    let result = add(firstNumber, secondNumber);
    expect(result).toBe(5);
});
test("Calculate the difference of two numbers", () => {
    let firstNumber = 5;
    let secondNumber = 3;
    let result = subtract(firstNumber, secondNumber);
    expect(result).toBe(2);
});
test("Calculate the product of two numbers", () => {
    let firstNumber = 2;
    let secondNumber = 3;
    let result = multiply(firstNumber, secondNumber);
    expect(result).toBe(6);
});
test("Calculate the quotient of two numbers", () => {
    let firstNumber = 6;
    let secondNumber = 3;
    let result = divide(firstNumber, secondNumber);
    expect(result).toBe(2);
});