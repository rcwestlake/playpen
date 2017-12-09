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

  getState() {
    return this.allTodos
  }
}

export default ToDoList