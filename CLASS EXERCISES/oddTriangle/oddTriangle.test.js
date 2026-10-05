const {rowSumOddNumbers, rowSumEvenNumbers} = require('./oddTriangle');

describe('rowSumOddNumbers', () => {
    test('rowSumOddNumbers', () => {
        expect(rowSumOddNumbers(1)).toBe(1);
        expect(rowSumOddNumbers(2)).toBe(8);
        expect(rowSumOddNumbers(3)).toBe(27);
        expect(rowSumOddNumbers(4)).toBe(64);
        expect(rowSumOddNumbers(5)).toBe(125);
    });
    test('rowSumEvenNumbers', () => {
        expect(rowSumEvenNumbers(1)).toBe(2);
        expect(rowSumEvenNumbers(2)).toBe(10);
        expect(rowSumEvenNumbers(3)).toBe(44);
    
    });
});