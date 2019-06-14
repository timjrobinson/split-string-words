# split-string-words

Splits a string into individual words, taking quotes into account

[![Build Status](https://travis-ci.org/timjrobinson/split-string-words.svg?branch=master)](https://travis-ci.org/timjrobinson/split-string-words)

## Install 
```
$ npm install --save split-string-words
```

## Usage

```js

var split = require('split-string-words');

split('hello this is dog'); 
//=> ["hello", "this", "is", "dog"]

split('hello "this is dog"'); 
//=> ["hello", "this is dog"]

split('filename hello-world.js __winning.py'); 
//=> ["filename", "hello-world.js", "__winning.py"]
```

## License

MIT © [Tim Robinson](http://timjrobinson.com)