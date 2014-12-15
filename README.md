# Celeb Birthdays [![Build Status](https://travis-ci.org/alebelcor/celeb-birthdays.svg?branch=master)](https://travis-ci.org/alebelcor/celeb-birthdays)

> Find out what celebrities have the same birthday as you

## Getting started

Even though all files are provided here, you might want to update them yourself.

You'll need [Node.js](http://nodejs.org), then `cd` into this folder and `npm install`.

Run `./convert.js` to fetch the latest celebrity birthdays.

You can also use it as a Node module. Just install it `npm install --save celeb-birthdays` and then require it in your code:

```javascript
var birthdays = require('celeb-birthdays');
console.log(birthdays['08-07']); // MM-DD format

// [ 'Charlize Theron',
//   'Abbie Cornish',
//   'David Duchovny',
//   'Harold Perrineau',
//   'Michael Shannon',
//   'Tobin Bell',
//   'Hans Matheson',
//   'Randy Wayne',
//   'Wayne Knight',
//   'Maggie Wheeler' ]
```

## Credit

Inspired by [`norway-postal-codes`](https://github.com/sindresorhus/norway-postal-codes)

## License

MIT © Alejandro Beltrán
