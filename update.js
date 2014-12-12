#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var Promise = require('bluebird');
var request = require('request-promise');

var dates = require('./dates.json');
var pkg = require('./package.json');

var promises = [];
var json = {};
var OUTPUT_DIR = 'output';

function write(filename, data) {
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), data, 'utf8');
}

dates.forEach(function (date) {
  var options = {
    uri: 'http://www.imdb.com/date/' + date,
    resolveWithFullResponse: true
  };

  json[date] = [];

  var promise = request.get(options)
    .then(function (response) {
      return new Promise(function (resolve) {
        var $ = cheerio.load(response.body);

        $('#main > ul:first-of-type > li > a').each(function () {
          json[date].push($(this).text().trim());
        });

        resolve();
      });
    });

  promises.push(promise);
});

Promise.all(promises).then(function () {
  write(pkg.name + '.json', JSON.stringify(json));
  write(pkg.name + '.js', 'module.exports=' + JSON.stringify(json) + ';');
});
