// const Calculate = require("./functionExample");
// const { add, subtract, multiply, divide } = Calculate()

// const { add, subtract, multiply, divide } = require("./functionExample") // when exporting the funcation call
const { add, subtract, multiply, divide, getEvenNumbers} = require("./functionExample")() // calling the exported function directly

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

test("test to get Even numbers function reurns even numbers", ()=>{
    let arrayofNumbers = [1,2,3,4,5,6]
    expect(getEvenNumbers(arrayofNumbers)).toEqual([2,4,6])
})