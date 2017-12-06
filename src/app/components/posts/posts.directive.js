import './posts.css'
import {PostsCtrl as controller} from './posts.controller'
import template from './posts.html'

export const postsDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'posts',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};