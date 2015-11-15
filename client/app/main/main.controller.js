'use strict';

angular.module('xpenseApp')
  .controller('MainCtrl', ($scope, $http, Auth) => {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.showAddLinks = false;
    $scope.showRemoveLinks = false;

    $scope.toggleAddLinks = () => {
      $scope.showAddLinks = !($scope.showAddLinks);
      $scope.showRemoveLinks = false;
    };

    $scope.toggleRemoveLinks = () => {
      $scope.showRemoveLinks = !($scope.showRemoveLinks);
      $scope.showAddLinks = false;
    };

    $http.get('/api/things').success((awesomeThings) => {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = () => {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = (thing) => {
      $http.delete('/api/things/' + thing._id);
    };

  });
