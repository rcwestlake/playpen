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

  onRemove() {
    this.toDoList.removeCompleted()
  }

  getCompletedCount() {
    return this.toDoList.countCompleted()
  }

  getActiveCount() {
    return this.toDoList.countActive()
  }

  onCountCompleted() {
    if(this.getCompletedCount() > 0) return true
  }
}

export default {
  template,
  controller: ToDoFilter,
  controllerAs: 'vm'
}