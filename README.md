# celeb-birthdays

> Find out what celebrities have the same birthday as you

[![npm version](https://img.shields.io/npm/v/celeb-birthdays.svg)](https://npmjs.org/package/celeb-birthdays)
[![Build Status](https://travis-ci.org/alebelcor/celeb-birthdays.svg?branch=master)](https://travis-ci.org/alebelcor/celeb-birthdays)

## Downloads

- [celeb-birthdays.json](https://raw.githubusercontent.com/alebelcor/celeb-birthdays/master/output/celeb-birthdays.json):
  Object with string members (in the form `MM-DD`) containing an array of names each one.

*Last updated 2015-10-14*

## Getting started

Even though all files are provided here, you might want to update them yourself.

You'll need [Node.js](https://nodejs.org), then `cd` into this folder and `npm install`.

Run `npm run generate` to fetch the latest celebrity birthdays.

You can also use it as a Node module. Just install it `npm install --save celeb-birthdays` and then
require it in your code:

```javascript
var birthdays = require('celeb-birthdays');

console.log(birthdays['08-07']); // MM-DD format

// [
//   'Charlize Theron',
//   'Abbie Cornish',
//   'David Duchovny',
//   'Harold Perrineau',
//   'Michael Shannon',
//   'Tobin Bell',
//   'Hans Matheson',
//   'Randy Wayne',
//   'Wayne Knight',
//   'Maggie Wheeler'
// ]
```

## Credit

Inspired by [norway-postal-codes](https://github.com/sindresorhus/norway-postal-codes)

## License

MIT © Alejandro Beltrán
