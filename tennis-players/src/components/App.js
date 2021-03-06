import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Players from './Players'
import Player from './Player'

const App = () => (
  <Router>
    <div>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route exact path='/players' component={Players} />
      <Route path='/players/:id' component={Player} />
    </div>
  </Router>
)

export default App