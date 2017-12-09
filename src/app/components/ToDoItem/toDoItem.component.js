import template from './toDoItem.html'

export class ToDoItemController {
  constructor(toDoList) {
    "ngInject"
    this.toDoList = toDoList
  }
}

export default {
  bindings: {
    task: '=todo'
  },
  template,
  controller: ToDoItemController,
  controllerAs: 'vm'
}