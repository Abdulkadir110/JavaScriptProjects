function Calculate() {
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
    function getEvenNumbers (array){
        let evenNumbers = array.filter((element) => element % 2 === 0)
        return evenNumbers
    } 
    return{
        add,
        subtract,
        multiply,
        divide,
        getEvenNumbers
    }
}



module.exports = Calculate;  // exporting the object
// module.exports = Calculate() exporting the function call