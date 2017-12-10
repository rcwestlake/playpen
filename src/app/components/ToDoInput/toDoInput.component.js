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

  onAdd() {
    this.toDoList.add(this.newTask)
    .then(() => this.resetNewTask())
  }

  resetNewTask() {
    this.newTask.title = ''
  }
}

export default {
  template,
  controller: ToDoInput,
  controllerAs: 'vm'
}