'use strict';

angular.module('workspaceApp')
  .controller('PollsCtrl', function ($scope, $routeParams, Poll) {
    if ($routeParams.id) {
      $scope.poll = Poll.get({ id: $routeParams.id });
      $scope.addVote = function() {
        $scope.poll.votes += 1;
        $scope.poll.$update();
      };
    } else {
      Poll.query({}, function(polls) {
        $scope.polls = polls;
      });
    }
  });
