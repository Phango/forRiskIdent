'use strict'

module.exports = {
    sameXOAmount(string) {
        // psuedo code:
        // split the string into an array, then use array filter to filter out
        // x or o, then count the length of array
        // return if the 2 array lengths are the same

        let xLength = this.getOccurenceCount(string, 'x');
        let yLength = this.getOccurenceCount(string, 'o');

        return xLength == yLength;
    },

    getOccurenceCount(string, target) {
        return string
        .toLowerCase()
        .split('')
        .filter((a) => a === target)
        .length;
    }
}
