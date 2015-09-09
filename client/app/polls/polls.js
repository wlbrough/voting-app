'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polls', {
        templateUrl: 'app/polls/polls.html',
        controller: 'PollsCtrl'
      })
      .when('/polls/:id', {
        templateUrl: 'app/polls/polls-single.html',
        controller: 'PollsCtrl'
      });
  });
