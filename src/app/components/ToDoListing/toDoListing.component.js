export class ToDoListing {
  constructor(toDoList) {
    "ngInject"
    this.toDoList = toDoList
    this.todos = []
  }

  getTodos() {
    console.log('in get todos')
    this.toDoList.getAll()
    .then(data => this.todos = data)
  }

  $onInit() {
    this.getTodos()
  }
}

export default {
  template: `
    <div class="todo-listing">
      <ul>
        <to-do-item todo="todo" ng-repeat="todo in vm.todos"></to-do-item>
      </ul>
    </div>
  `,
  controller: ToDoListing,
  controllerAs: 'vm'
}