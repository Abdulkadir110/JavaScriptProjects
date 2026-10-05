
function repeatAction( times, callback) {
   callback(times)    
}
function action(times){
    for(let count = 1; count <= times; count++) {
        process.stdout.write(`\"Repetition ${count}\",`)
    }   
}
repeatAction(3, action)