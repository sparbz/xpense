'use strict';

describe('Controller: AddExpenseCtrl', function () {

  // load the controller's module
  beforeEach(module('xpenseApp'));

  var AddExpenseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddExpenseCtrl = $controller('AddExpenseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
