'use strict';

describe('Controller: UserheaderCtrl', function () {

  // load the controller's module
  beforeEach(module('xpenseApp'));

  var UserheaderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserheaderCtrl = $controller('UserheaderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
