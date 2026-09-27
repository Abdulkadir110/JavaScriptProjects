const {Breakfast} = require('./Breakfast');

describe('Breakfast', () => {
    test('test to check if the number of petals for both flowers is even and odd respectively', () => {
        expect(Breakfast(4, 5)).toBe(true);
    });
    test('test to check if the number of petals for both flowers is odd ', () => {
        expect(Breakfast(3, 5)).toBe(false);
    });
    test('test to check if the number of petals for both flowers is even', () => {
        expect(Breakfast(18, 14)).toBe(false);
    });
});    