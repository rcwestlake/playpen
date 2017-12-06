import template from './app.html'
import {AppCtrl as controller} from './app.controller'

const app = () => {
  return {
    template,
    controller,
    controllerAs: 'app',
    restrict: 'E',
    scope: {},
    replace: true
  }
};

export {app}
