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
          <to-do-listing></to-do-listing>
        </div>
      </div>
    </div>
    `,
    controller: ToDoAppController,
    controllerAs: 'appCtrl'
}
