'use strict'

module.exports = {
    sumSmallestNumbers: function(numbers) {
        /*
        * This function takes an array of numbers and computes the
        * sum of the 2 smallest numbers
        *
        */

        // psuedo code (functional):
        // sort the import (assumes array is sortable and is numeric)
        // slice input array to the parts needed
        // sum each number in the remaining array

        // define how the numbers will be sliced
        let start = 0;
        let end = 2;

        return numbers
        .sort()
        .slice(start, end)
        .reduce((a, b) => a + b)

        // psuedo code (with loop):
        // loop through the numbers
        // find the smallest number with a min array function
        // (can define it or get it as a plutin)
        // find the index of the first smallest
        // store the value and pop it out array
        // another loop to get the second lowest
        // return the 2 values added together.
    }
}
