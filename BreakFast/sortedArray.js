
function combineArrays(firstArray, secondArray){
    combine = []
    for(let index = 0; index < firstArray.length; index++){
        combine.push(firstArray[index])
    }
   
    for(let index = 0; index < secondArray.length; index++){
        combine.push(secondArray[index])
        
    }
    return combine;
}

function sortArray(firstArray, secondArray){
    let combined = combineArrays(firstArray, secondArray);
    for(let index = 0; index < combined.length; index++){
        for(let secondIndex = index + 1; secondIndex < combined.length; secondIndex++){
            if(combined[index] > combined[secondIndex]){
                let temp = combined[index];
                combined[index] = combined[secondIndex];
                combined[secondIndex] = temp;
            }
        }
}
    return combined;
}

module.exports = {combineArrays, sortArray};