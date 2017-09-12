Coding Kata - Roman Numerals
===

A Roman Numeral generator coded in JavaScript with tests.

## Project components
- A simple app written in JavaScript utilising one main class, `RomanNumeralGenerator`.
- The app uses RequireJS to load the class as a dependency.
- JavaScript is linted using JSHint.
- Unit tests for RomanNumeralGenerator class are written using Mocha and Chai, and run using Karma.
- Project dependencies are managed using npm.
- A simple HTML page demonstrates the app `/public/index.html`
- Some very basic CSS styling is applied.
- The build process stops short of any minification/uglification of code.


## Project structure

File/folder         |Description
--------------------|--------------------------------------------
.gitignore          |Files ignored by Git
.jshintrc           |Config for JavaScript linting with JSHint
Gruntfile.js        |Grunt task definitions and config
karma.conf.js       |Config for Karma test runner
package.json        |List of packages to be installed by npm
README.md           |This file
public/             |Built project files
src/                |Source files for the project
src/scripts         |JavaScript files
src/styles          |CSS styles
test/               |Tests and test config
test/scripts        |JavaScript unit test files

---

## Download and run
The built project can be found in the `/public` directory. Simply opening `/public/index.html` in your browser will demonstrate the app.

---

## Test and build
The project can be cloned and dependencies installed. This will allow tests to be run, and the project built and opened.

### Dependencies
It is assumed that you have the following libraries installed locally:

* [node](https://nodejs.org/en/)
* npm
* [grunt-cli](https://gruntjs.com/getting-started) node plugin

### Set up project
Install all node dependencies from the command line in the root folder of this project:
```
$ npm install
```

Run the tests, build and open the app by running the default grunt command:
```
$ grunt
```

### Running the tests
Linting is performed using JSHint.

Karma is used to run the tests with PhantomJS. 

Both can be run from the command line:
```
$ grunt test
```
