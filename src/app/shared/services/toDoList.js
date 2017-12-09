import { API } from '../constants'

class ToDoList {
  constructor($http) {
    "ngInject"
    this.allTodos = []
    this.$http = $http
  }

  getAll() {
    console.log('in getAll')
    return this.$http.get('http://localhost:3000/tasks')
    .then(data => this.allTodos = data.data)
    .then(this.getState())
  }

  getState() {
    return this.allTodos
  }
}

export default ToDoList