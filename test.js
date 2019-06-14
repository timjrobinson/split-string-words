'use strict';

var split = require("./index");
var test = require('tap').test;

test('Test', function (t) {
    t.deepEqual(split(), []);
    t.deepEqual(split(''), []);
    t.deepEqual(split(' '), []);
    t.deepEqual(split('\t'), []);
    t.deepEqual(split('hello this is dog '), ["hello", "this", "is", "dog"]);
    t.deepEqual(split('hello "this is dog"'), ["hello", "this is dog"]);
    t.deepEqual(split('filenames hello-world.js __winning.py'), ["filenames", "hello-world.js", "__winning.py"]);
    t.deepEqual(split('filenames "hello-world.js __winning.py"'), ["filenames", "hello-world.js __winning.py"]);
    t.end();
});
