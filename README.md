# k-log [![Build Status](https://travis-ci.org/kaliumxyz/k-log.svg?branch=master)](https://travis-ci.org/kaliumxyz/k-log)
> zero dependencies logger, as minimal as possible.

## install
simply download it from npm.
```
$ npm i -D k-log
```


## usage
Require it in your script and feed it a writestream to get the logger function back.
```js
const logStream = fs.createWriteStream(path.join(__dirname, `application.log`), { flags: 'a' })
const log = require('./lib/logger')(logStream)
```

## Tests
```
$ npm test
```

## license
MIT © [Kalium](https://kalium.xyz)
