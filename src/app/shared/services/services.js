import angular from 'angular'

import toDoList from './toDoList'
import { API } from '../constants'

export default angular
  .module('app.services', [])
  .service({
    toDoList,
  })
  .constant('API', API)