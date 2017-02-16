'use strict'

var fragments = require('./sumSmallestNumbers');

describe('sumSmallestNumbers()', () => {
    it('should return the sum of the two smallest numbers', () => {
        expect(fragments.sumSmallestNumbers([1, 2, 3, 4])).toEqual(3);
        expect(fragments.sumSmallestNumbers([6, 7, 56, 2, 9, 34, 3])).toEqual(5);
        expect(fragments.sumSmallestNumbers([4, 4])).toEqual(8);
        expect(fragments.sumSmallestNumbers([5, 38, 15, 1, 1, -19, 9])).toEqual(-18);
        expect(fragments.sumSmallestNumbers([1, 1, 1, 1])).toEqual(2);
    });
});
