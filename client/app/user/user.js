'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      })
      .when('/user/:userId', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });
  });
