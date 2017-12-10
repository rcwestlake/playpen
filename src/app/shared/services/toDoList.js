import cuid from 'cuid'

class ToDoList {
  constructor($http, API) {
    "ngInject"
    this.filteredTodos = []
    this.allTodos = []
    this.filterState = 'all'
    this.$http = $http
    this.API = API
  }

  getAll() {
    return this.$http.get(this.API)
    .then(data => this.allTodos = data.data)
    .then(() => this.getState())
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

  showCompleted() {
    this.filterState = 'completed'
    this.filter()
  }

  showActive() {
    this.filterState = 'active'
    this.filter()
  }

  showAll() {
    this.filterState = 'all'
    this.filter()
  }

  filter() {
    const showAll = this.filterState === 'all'
    const showCompleted = this.filterState === 'completed'
    
    return this.filteredTodos = this.allTodos.filter(task => (showAll || showCompleted === task.completed))
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
        return this.allTodos
      default:
        return this.allTodos
    }
    
  } 

  getState() {
    console.log('all', this.allTodos)
    console.log('filtered', this.filteredTodos)
    return this.filter()
  }
}

export default ToDoList