'use strict';

var expect = require('chai').expect;

var pkg = require('../package.json');
var birthdays = require('../output/' + pkg.name + '.js');

describe(pkg.name, function () {

  it('should have 366 days', function () {
    expect(Object.keys(birthdays).length).to.equal(366);
  });

  describe('specific birthday', function () {

    var specificBirthday = birthdays['01-02'];

    it('should have 10 names', function () {
      expect(specificBirthday.length).to.equal(10);
      expect(specificBirthday[0]).to.be.a('string');
    });

    it('should not be empty', function () {
      expect(specificBirthday.join('').trim()).to.not.be.empty();
    });

  });

});
