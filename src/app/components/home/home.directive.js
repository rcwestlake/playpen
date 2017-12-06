import './home.css'
import {HomeCtrl as controller} from './home.controller'
import template from './home.html'

export const homeDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'home',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};