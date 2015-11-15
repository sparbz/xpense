'use strict';

angular.module('xpenseApp')
  .directive('userheader', function () {
    return {
      templateUrl: 'components/userheader/userheader.html',
      restrict: 'EA',
      controller: 'UserHeaderCtrl'
    };
  });