define([
    'chai',
    'app/RomanNumeralGenerator'
], function(
    chai,
    RomanNumeralGenerator
) {

    'use strict';

    var expect = chai.expect;
    var instance;

    describe('RomanNumeralGenerator', function() {

        beforeEach(function() {
            instance = new RomanNumeralGenerator();
        });

        afterEach(function() {

        });

        describe('.generate', function() {
            var oneToTen = {
                1: 'I',
                2: 'II',
                3: 'III',
                4: 'IV',
                5: 'V',
                6: 'VI',
                7: 'VII',
                8: 'VIII',
                9: 'IX',
                10: 'X'
            };

            var otherThresholds = {
                40: 'XL',
                50: 'L',
                90: 'XC',
                100: 'C',
                400: 'CD',
                500: 'D',
                900: 'CM',
                1000: 'M'
            };

            var otherNumbers = {
                1954: 'MCMLIV',
                1990: 'MCMXC',
                2014: 'MMXIV',
                3888: 'MMMDCCCLXXXVIII', // I think that's the longest
                3999: 'MMMCMXCIX'
            };

            it('should not support numbers outside of 1 - 3999 range', function() {
                expect(instance.generate(-3999)).to.equal('');
                expect(instance.generate(0)).to.equal('');
                expect(instance.generate(4000)).to.equal('');
            });

            it('should convert 1-10 to correct numerals', function() {
                for(var decimal in oneToTen) {
                    expect(instance.generate(decimal)).to.equal(oneToTen[decimal]);
                }
            });

            it('should convert remaining threshold values to correct numerals', function() {
                for(var decimal in otherThresholds) {
                    expect(instance.generate(decimal)).to.equal(otherThresholds[decimal]);
                }
            });

            it('should convert other sample values to correct numerals', function() {
                for(var decimal in otherNumbers) {
                    expect(instance.generate(decimal)).to.equal(otherNumbers[decimal]);
                }
            });
        });

    });

});