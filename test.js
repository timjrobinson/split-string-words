'use strict';

var split = require("./index");
var test = require('tap').test;

test('Test', function (t) {
    t.deepEqual(split('hello this is dog'), ["hello", "this", "is", "dog"]);
    t.deepEqual(split('hello "this is dog"'), ["hello", "this is dog"]);
    t.deepEqual(split('hello.world "this is dog"'), ["hello.world", "this is dog"]);
    t.end();
});
