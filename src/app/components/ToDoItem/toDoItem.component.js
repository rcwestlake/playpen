export class ToDoItemController {
  constructor(toDoList) {
    "ngInject";
    this.toDoList = toDoList
  }
}

export default {
  bindings: {
    task: '=todo'
  },
  template: `
    <div>
      <p>{{vm.task.title}}</p>
    </div>
  `,
  controller: ToDoItemController,
  controllerAs: 'vm'
}