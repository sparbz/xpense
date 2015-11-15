'use strict';

angular.module('xpenseApp')
  .controller('UserHeaderCtrl', function ($scope, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
