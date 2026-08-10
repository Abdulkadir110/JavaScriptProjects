let isAdult = true;
let isMan = false;
let isStudent = true;

if(isAdult && isMan && !isStudent) {
    console.log("true");
}
else if(isAdult && !isMan && isStudent) {
    console.log("true");
}
else if(!isAdult && isMan && isStudent) {
    console.log("true");
}

else {
    console.log("false");
}
