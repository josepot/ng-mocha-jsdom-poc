'use strict';

angular.module('sbrpr.dummy.service', [])
.factory('dummySvc', [function() {
  function dummy1() {
    return 'test1';
  }

  function dummy2() {
    return 'test2';
  }

  return {
    dummy1: dummy1,
    dummy2: dummy2
  };
}]);
