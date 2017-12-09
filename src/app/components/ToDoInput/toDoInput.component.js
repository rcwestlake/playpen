import template from './toDoInput.html'

export class ToDoInput {
  constructor(toDoList) {
    "ngInject"
    this.toDoList = toDoList
    this.newTask = {
      title: '',
      completed: false
    }
  }

  addTask() {
    console.log('here!')
    this.toDoList.add(this.newTask)
  }
}

export default {
  template,
  controller: ToDoInput,
  controllerAs: 'vm'
}