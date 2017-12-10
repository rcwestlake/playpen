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
    .then(data => this.updateState('add', data.data))
  }

  update(task) {
    if(!task) return
    if(!task.title) return 'Title is required'

    return this.$http.put(`${this.API}/${task.id}`, task)
    .then(data => this.updateState('update', data.data))
  }

  updateState(type, newData) {
    switch (type) {
      case 'add':
        return this.allTodos = [...this.allTodos, newData]    
      case 'update':
        this.allTodos = this.allTodos.map((todo, i) => {
          if(todo.id == newData.id) {
            // NOTE - THIS SHOULD BE IMMUTABLE - SIMILAR TO REDUX ---> BELOW IS A TEMPORARY
            todo.title = newData.title
            todo.completed = newData.completed
            return todo
          }
          return todo
        })
        console.log(this.allTodos)
        return this.allTodos
      default:
        return this.allTodos
    }
    
  } 

  getState() {
    return this.allTodos
  }
}

export default ToDoList