'use strict';

angular.module('workspaceApp')
  .controller('NewCtrl', function ($scope, Auth, $http) {
    $scope.poll = {};
    $scope.poll.answers = [{ text: '', votes: 0 }, { text: '', votes: 0 }];
    
    $scope.addAnswer = function() {
      $scope.poll.answers.push({ text: '', votes: 0 });
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
        
      }
    
    }
    
  });
