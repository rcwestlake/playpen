import template from './toDoFilter.html'
import './toDoFilter.css'

class ToDoFilter {
  constructor(toDoList) {
    "ngInject"
    this.toDoList = toDoList
  }

  onAll() {
    this.toDoList.showAll()
  }

  onCompleted() {
    this.toDoList.showCompleted()
  }

  onActive() {
    this.toDoList.showActive()
  }
}

export default {
  template,
  controller: ToDoFilter,
  controllerAs: 'vm'
}