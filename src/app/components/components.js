import angular from 'angular';
import toDoItem from './ToDoItem/toDoItem.component'
import toDoListing from './ToDoListing/toDoListing.component'

const componentModule = angular.module('app.components', [])
.component('toDoItem', toDoItem)
.component('toDoListing', toDoListing)

export default componentModule;
