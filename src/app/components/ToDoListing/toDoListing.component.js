import template from './toDoListing.html'

export class ToDoListing {
  constructor(toDoList) {
    "ngInject"
    this.toDoList = toDoList
  }

  getTodos() {
    this.toDoList.getAll()
    .then(data => this.todos = data)
  }

  $onInit() {
    this.getTodos()
  }
}

export default {
  bindings: {
    todos: '=todos'
  },
  template,
  controller: ToDoListing,
  controllerAs: 'vm'
}