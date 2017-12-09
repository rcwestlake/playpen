import template from './toDoListing.html'

export class ToDoListing {
  constructor(toDoList) {
    "ngInject"
    this.toDoList = toDoList
    this.todos = []
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
  template,
  controller: ToDoListing,
  controllerAs: 'vm'
}