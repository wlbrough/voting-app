'use strict';

angular.module('workspaceApp')
  .controller('NewCtrl', function ($scope, $http) {
    $scope.polls = [];
    
    $http.get('/api/polls').success(function(polls) {
      $scope.polls = polls;
    });
    
    
  });
