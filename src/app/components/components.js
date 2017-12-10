import angular     from 'angular';
import toDoItem    from './ToDoItem/toDoItem.component'
import toDoListing from './ToDoListing/toDoListing.component'
import toDoInput   from './ToDoInput/toDoInput.component'
import toDoFilter  from './ToDoFilter/toDoFilter.component'
import toDoFooter  from './ToDoFooter/toDoFooter.component'

const componentModule = angular.module('app.components', [])
.component('toDoItem', toDoItem)
.component('toDoListing', toDoListing)
.component('toDoInput', toDoInput)
.component('toDoFooter', toDoFooter)
.component('toDoFilter', toDoFilter)

export default componentModule;
