'use strict'

module.exports = {
    findOddAmount(numbers) {
        // build object to count number occurences
        let counts = {};

        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] in counts) {
                counts[numbers[i]]++
            }
            else {
                counts[numbers[i]] = 1
            }
        }

        //iterate over counts, if the numbers' value is odd then return
        for (var number in counts) {
            if (counts[number] % 2 != 0) {
                return parseInt(number)
            }

        }
    }
}
