import './app.scss';
import template from './app.html'

export class ToDoAppController {
  constructor(toDoList) {
    "ngInject"
    this.toDo = toDoList
  }
}

export default {
  template,
  controller: ToDoAppController,
  controllerAs: 'appCtrl'
}
