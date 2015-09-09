'use strict';

angular.module('workspaceApp')
  .controller('UserCtrl', function ($scope, $routeParams, User, Auth, $http) {
    $scope.polls = {};
    if ($routeParams.userId) {
      $scope.user._id = $routeParams.userId;
    } else {
      $scope.user = Auth.getCurrentUser();
    }
    console.log(JSON.stringify($scope.user));
    $http.get('/api/polls/user/' + $scope.user._id).
      then(function(rsp) {
        $scope.polls = rsp.data;
        console.log($scope.polls);
      }, function(rsp) {
        console.log('error state');
      });
  });
