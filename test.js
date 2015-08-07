'use strict';

var split = require("./index");
var test = require('tap').test;

test('Default behavior', function (t) {
    t.deepEqual(split('hello this is dog'), ["hello", "this", "is", "dog"]);
    t.deepEqual(split('hello "this is dog"'), ["hello", "this is dog"]);
    t.deepEqual(split('hello.world "this is dog"'), ["hello", "world", "this is dog"]);
    t.end();
});

test('Custom delimiter', function (t) {
    var delimiter = "[^\\s]";
    t.deepEqual(split('filename hello-world.js', delimiter), ["filename", "hello-world.js"]);
    t.deepEqual(split('filename hello-world.js', delimiter), ["filename", "hello-world.js"]);
    t.deepEqual(split('hello.world "this is dog"', delimiter), ["hello.world", "this is dog"]);
    t.end();
});
