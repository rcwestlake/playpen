import './app.scss';

export class ToDoAppController {
  constructor(toDoList) {
    "ngInject"
    this.toDo = toDoList
  }
}

export default {
  template: `
    <div class="app">
      <div ui-view>
        <div class="todos-list">
          <to-do-item todo="todo" ng-repeat="todo in appCtrl.toDo.todos"></to-do-item>
        </div>
      </div>
    </div>
    `,
    controller: ToDoAppController,
    controllerAs: 'appCtrl'
}
