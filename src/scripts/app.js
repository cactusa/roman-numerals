/**
 * Requirejs config
 */
requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app'
    }
});

/**
 * Main app
 */
require([
        'app/RomanNumeralGenerator'
    ], function(
        RomanNumeralGenerator
    ) {

    'use strict';

    var generator = new RomanNumeralGenerator();
    var inputEl = document.querySelector('.js-app-input');
    var outputEl = document.querySelector('.js-app-output');

    inputEl.addEventListener('input', function() {
        outputEl.innerText = generator.generate(inputEl.value);
    });

});
