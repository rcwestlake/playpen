import template from './toDoItem.html'
import './toDoItem.css'

export class ToDoItemController {
  constructor(toDoList) {
    "ngInject"
    this.toDoList = toDoList
  }

  onUpdate() {
    this.toDoList.update(this.task)
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