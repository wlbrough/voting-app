'use strict';

angular.module('workspaceApp')
  .controller('NewCtrl', function ($scope, Auth, Poll) {
    $scope.poll = {};
    $scope.poll.answers = [{ text: '' }, { text: '' }];
    
    $scope.addAnswer = function() {
      $scope.poll.answers.push({ text: '' });
    };
    
    $scope.removeAnswer = function() {
      $scope.poll.answers.pop();
    };
    
    $scope.addPoll = function(formValid) {
      
      if (formValid) {
        $scope.poll.answers = $scope.poll.answers.filter(function(answer) {
          return answer.text.length > 0;
        });
        Poll.save($scope.poll);
      }
    
    }
    
  });
