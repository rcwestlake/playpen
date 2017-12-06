import {PostCtrl as controller} from './post.controller'
import template from './post.html'

export const postDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'post',
    scope: {},
    restrict: 'E',
    replace: true
  }
}