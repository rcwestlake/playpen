import template from './toDoListing.html'

export class ToDoListing {
  constructor(toDoList) {
    "ngInject"
    this.toDoList = toDoList
  }

  getTodos() {
    this.toDoList.getAll()
  }

  $onInit() {
    this.getTodos()
  }
}

export default {
  bindings: {
    todos: '<'
  },
  template,
  controller: ToDoListing,
  controllerAs: 'vm'
}