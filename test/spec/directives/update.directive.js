'use strict';

describe('Directive: update.directive', function () {

  // load the directive's module
  beforeEach(module('angularFireApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<update.directive></update.directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the update.directive directive');
  }));
});
