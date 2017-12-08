import angular from 'angular';
import toDoItem from './ToDoItem/toDoItem.component'

const componentModule = angular.module('app.components', [])
.component('toDoItem', toDoItem)

export default componentModule;
