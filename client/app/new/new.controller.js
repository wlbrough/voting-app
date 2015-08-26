'use strict';

angular.module('workspaceApp')
  .controller('NewCtrl', function ($scope, Auth, Poll) {
    $scope.poll = {};
    $scope.poll.answers = [{ text: '' }, { text: '' }];
    
    $scope.addAnswer = function() {
      $scope.poll.answers.push({ text: '' });
    };
    
    $scope.removeAnswer = function() {
      // Still needs to be implemented
    };
    
    $scope.addPoll = function() {
      $scope.pollNameInvalid = false;
      
      if (!$scope.pollEditor.name.$valid) {
        $scope.pollNameInvalid = true;
      }
      
      if ($scope.pollEditor.$valid) {
        $scope.poll.answers = $scope.poll.answers.filter(function(answer) {
          return answer.text.length > 0;
        });
        Poll.save($scope.poll);
      }
    
    }
    
  });
