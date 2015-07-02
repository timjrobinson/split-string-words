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
```

## License

MIT © [Tim Robinson](http://timjrobinson.com)