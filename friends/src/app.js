import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/home.js'


class App extends React.Component {
  render() {
    return (
      <h1>the app works!!!</h1>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root'))