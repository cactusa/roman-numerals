// resolve location of test files
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/\/base\/test\/scripts\/.*.spec.js/.test(file)) {
            tests.push(file);
        }
    }
}

// requirejs config
require.config({
  baseUrl: '/base',
  'paths': {
      'chai': 'node_modules/chai/chai',
      'app': 'src/scripts/app'
  },

  deps: tests,

  callback: window.__karma__.start
});
