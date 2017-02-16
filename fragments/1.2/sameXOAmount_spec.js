'use strict'

var fragments = require('./sameXOAmount');

describe('sameXOAmount()', () => {
    it('should return `true` if number of `X` and `O` is equal', () => {
        expect(fragments.sameXOAmount('xXoO')).toEqual(true);
        expect(fragments.sameXOAmount('aAxXXbBoOo')).toEqual(true);
        expect(fragments.sameXOAmount('abc')).toEqual(true);
    });

    it('should return `false` if number of `X` and `O` is not equal', () => {
        expect(fragments.sameXOAmount('OaAxXbBoO')).toEqual(false);
        expect(fragments.sameXOAmount('xgXoXsdxOxz')).toEqual(false);
        expect(fragments.sameXOAmount('aaAmmMxMM')).toEqual(false);
    });
});
