import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

const Home = () => <h1>home route</h1>
const About = () => <h1>about route</h1>

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/' component={About} />
    </div>
  </Router>
)


export default App;
