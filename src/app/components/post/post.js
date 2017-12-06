import angular from 'angular'
import {postDirective} from './post.directive'

const post = angular.module('post', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('post', {
      url: '/',
      template: '<post></post>'
    })
  })
  .directive('post', postDirective)

export {post}