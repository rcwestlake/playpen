'use strict';

angular.module('noterious', [
  'ui.router',
  'ngAnimate',
  'noterious.common'
])
  .constant('ENDPOINT_URI', 'http://localhost:5000/')
  .constant('DATA_PATH', 'app/data.json')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/boards');

    $stateProvider
      .state('boards', {
        url:'/boards',
        templateUrl: 'app/boards/boards.tmpl.html',
        controller: 'BoardsCtrl',
        controllerAs: 'bctrl'
      })
      .state('notes', {
        url:'/notes/:id',
        templateUrl: 'app/notes/notes.tmpl.html',
        controller: 'NotesCtrl',
        controllerAs: 'nctrl'
      })
    ;
  })
;
