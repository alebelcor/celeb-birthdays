#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');

var cheerio = require('cheerio');
var got = require('got');
var Promise = require('pinkie-promise');

var dates = require(path.resolve('.', 'dates'));
var pkg = require(path.resolve('.', 'package.json'));

var promises = [];
var json = {};
var OUTPUT_DIR = 'output';

function getRequestURLforDate(date) {
  if (typeof date !== 'string' || date.length !== 5) {
    throw new Error('Date has be valid.');
  }

  return 'http://www.imdb.com/date/' + date;
}

function write(filename, data) {
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), data, 'utf8');
}

dates.forEach(function (date) {
  json[date] = [];

  promises.push(got(getRequestURLforDate(date)).then(function (response) {
    var $ = cheerio.load(response.body);

    $('#main > ul:first-of-type > li > a').each(function () {
      json[date].push($(this).text().trim());
    });
  }));
});

Promise.all(promises).then(function () {
  write(pkg.name + '.json', JSON.stringify(json));
  write(pkg.name + '.js', 'module.exports=' + JSON.stringify(json) + ';');
});
