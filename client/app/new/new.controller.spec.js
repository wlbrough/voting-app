'use strict';

describe('Controller: NewCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var NewCtrl, scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($httpBackend, $controller, $rootScope) {
    httpBackend = $httpBackend;
    httpBackend.whenPOST('/api/polls').respond(200);
      
    scope = $rootScope.$new();
    NewCtrl = $controller('NewCtrl', {
      $scope: scope
    });
  }));

  describe('$scope.addAnswer', function() {
    it('should increase the length of the answers array by 1', function () {
      scope.addAnswer();
      expect(scope.poll.answers.length).toBe(3);
    });
  });
  
  describe('$scope.removeAnswer', function() {
    it('should decrease the length of the answers array by 1', function() {
      scope.removeAnswer(/* something */);
      expect(scope.poll.answers.length).toBe(1);
    });
  });
  
  describe('$scope.addPoll', function() {
    it('should send poll to server', function() {
      httpBackend.expectPOST('/api/polls', scope.poll).respond(200);
      scope.addPoll(true);
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
  });
});
