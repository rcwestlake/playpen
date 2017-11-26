'use strict';

angular.module('noterious', [
  'ui.router',
  'ngAnimate',
  'noterious.common'
])
  .constant('ENDPOINT_URI', 'data.json')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/boards');

    $stateProvider
      .state('boards', {
        url:'/boards',
        templateUrl: 'app/boards/boards.tmpl.html',
        controller: 'BoardsCtrl',
        controllerAs: 'bctrl'
      })
    ;
  })
;
