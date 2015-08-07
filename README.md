# split-string-words
Splits a string into individual words, taking quotes into account

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

split('filename hello-world.js');
//=> ["filename", "hello", "world", "js"]

// You can also provide an optional regex delimiter, which can be used in place of `\w`.
// Keep in mind that you must escape backslashes.

split('filename hello-world.js', '[^\\s]');
//=> ["filename", "hello-world.js"]
```

## License

MIT © [Tim Robinson](http://timjrobinson.com)
