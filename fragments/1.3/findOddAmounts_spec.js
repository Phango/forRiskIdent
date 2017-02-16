'use strict'

var fragments = require('./findOddAmount');

describe('findOddAmount()', () => {
    it('should return the number which occurs with an odd frequency', () => {
        expect(fragments.findOddAmount([1, 2, 2, 3, 3])).toEqual(1);
        expect(fragments.findOddAmount([8, 8, 7, 7, 7])).toEqual(7);
        expect(fragments.findOddAmount([10, 3, 3, 10, 6, 10, 6, 1, 1])).toEqual(10);
    });
});
