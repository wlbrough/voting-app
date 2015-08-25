'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new', {
        templateUrl: 'app/new/new.html',
        controller: 'NewCtrl',
        authenticate: true
      });
  });
