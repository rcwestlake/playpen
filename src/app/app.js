import angular from 'angular';
import uiRouter from 'angular-ui-router';

import '../style/app.css';

import {app as appDirective} from './app.directive'
import {home} from './home/home'
import {posts} from './posts/posts'

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  uiRouter,
  home.name,
  posts.name
])
  .directive('app', appDirective)

export default MODULE_NAME;