import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const Home = () => <h1>home route</h1>
const About = () => <h1>about route</h1>
const Person = () => {
  console.log('person route', this)
  return <h1>person route</h1>
}
const ThirdRoute = () => <h1>third route</h1>

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/about/:id' component={Person} />
      <Route path='/third' component={ThirdRoute} />
    </div>
  </Router>
)

export default App