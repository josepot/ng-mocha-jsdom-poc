var expect = require('chai').expect;
var h = require('./helper.js');
var module = h.module;
var inject = h.inject;

require('../src/dummy-service.js');

describe('dummy service', function() {

  var svc;
  beforeEach(function(){
    module('sbrpr.dummy.service');
    inject(function(dummySvc) {
      svc = dummySvc;
    });
  });

  describe('dummy1', function() {
    it('should be a function', function() {
      expect(typeof svc.dummy1).to.equal('function');
    });

    it('should return the value "test1"', function() {
      expect(svc.dummy1()).to.equal('test1');
    });
  });
});
