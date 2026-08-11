

const prompt = require("prompt-sync")();
const age = Number(prompt("Enter the first number: "))

function getStatusOf(age){
    if(age > 0 && age <=12) {
         return ("Child");
    }
    else if (age >=13 && age <=19) {
         return ("Teen");
    }

    else if(age >=20 && age <= 59) {
        return ("Adult");
    }
    else if( age >= 60) {
        return ("Senior");
    }

    else {
        return ("invalid age");
    }
}

console.log(getStatusOf(age))


