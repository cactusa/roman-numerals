/**
 * A Roman numeral generator
 * @module app/RomanNumeralGenerator
 */
 define('app/RomanNumeralGenerator', function() {
    'use strict';

    /**
     * Create a new Roman numeral generator.
     * @class
     * @alias module:app/RomanNumeralGenerator
     */
    var RomanNumeralGenerator = function () {
        // integer values
        this.integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        // corresponding numerals
        this.numerals = ['M', 'CM','D','CD','C', 'XC', 'L', 'XL', 'X','IX','V','IV','I'];
    };

    /**
     * Generates a Roman numeral from a number
     * @param {number} number - number to convert
     * @return {string} - a roman numeral
     */
    RomanNumeralGenerator.prototype.generate = function(number) {
        var result = '';
        var i = 0;

        // return empty string for unsupported numbers
        if (number < 1 || number > 3999) {
            return '';
        }

        // conversion is done by subtracting the largest integer value from the number which leaves a non-negative integer
        // the corresponding numeral is then appended to the result
        // this is repeated until the number is zero (ie. conversion is complete)

        // while conversion is not complete
        while (number > 0) {
            // if subtracting the integer value will leave a non-negative integer
            if (number >= this.integers[i]) {
                // subtract the integer value
                number -= this.integers[i];
                // append the numeral to result
                result += this.numerals[i];
            } else {
                // move to the next integer value
                i++;
            }
        }

        return result;
    };

    return RomanNumeralGenerator;
});
