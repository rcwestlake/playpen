import angular from 'angular';
import toDoItem from './ToDoItem/toDoItem.component'
import toDoListing from './ToDoListing/toDoListing.component'
import toDoInput from './ToDoInput/toDoInput.component'

const componentModule = angular.module('app.components', [])
.component('toDoItem', toDoItem)
.component('toDoListing', toDoListing)
.component('toDoInput', toDoInput)

export default componentModule;
