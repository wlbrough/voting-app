'use strict';

angular.module('workspaceApp')
  .controller('NewCtrl', function ($scope, $http) {
    $scope.poll = {};
    $scope.answers = [{ id: "answer1" }, { id: "answer2" }];
    
    $scope.addAnswer = function() {
      var nextAnswerNo = $scope.answers.length + 1;
      $scope.answers.push({ 'id': 'answer' + nextAnswerNo});
    }
    
    $scope.removeAnswer = function() {
      // Still needs to be implemented
    }
    
  });
