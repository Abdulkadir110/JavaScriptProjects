const {combineArrays, sortArray} = require('./sortedArray');
describe('sortedArray', () => {
    test('test to combine both given array', () => {
        firstArray = [2,4,1]
        secondArray = [3,2,6]
        combined = [2,4,1,3,2,6]
        expect(combineArrays(firstArray, secondArray)).toEqual(combined);
    })
    test('test to sort the combined array', () => {
        firstArray = [2,4,1]
        secondArray = [3,2,6]
        combined = [1,2,2,3,4,6]
        expect(sortArray(firstArray, secondArray)).toEqual(combined);
    })
});    
