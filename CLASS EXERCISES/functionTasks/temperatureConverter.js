
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

function convertTemp(value, unit, converterFn) {
    result = converterFn(value)
    console.log(`${value} ${unit} converts to ${result}`)
}


convertTemp(32, "fahrenheit", fahrenheitToCelsius)
convertTemp(0, "celsius", celsiusToFahrenheit)