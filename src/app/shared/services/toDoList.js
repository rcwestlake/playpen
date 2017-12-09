import cuid from 'cuid'

class ToDoList {
  constructor($http, API) {
    "ngInject"
    this.allTodos = []
    this.$http = $http
    this.API = API
  }

  getAll() {
    return this.$http.get(this.API)
    .then(data => this.allTodos = data.data)
    .then(this.getState())
  }

  add(task) {
    if(!task) return
    if(!task.title) return 'Title is required'
    task.id = cuid()
    return this.$http.post(this.API, task)
    .then(data => this.allTodos = [...this.allTodos, data.data])
  }

  getState() {
    return this.allTodos
  }
}

export default ToDoList