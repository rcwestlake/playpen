import angular from 'angular'
import {postsDirective} from './posts.directive'

const posts = angular.module('posts', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('posts', {
      url: '/',
      template: '<posts></posts>'
    })
  })
  .directive('posts', postsDirective)

export {posts}

