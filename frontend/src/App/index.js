import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Title from '../Title'
import HomeScreen from '../HomeScreen'
import ScrabbleScreen from '../ScrabbleScreen'
import Login from '../Login'
import NotFound from '../NotFound'
import Register from '../Register'
import './App.css'

const App = () => (
  <div>
    <Route path="/" component={Title} />
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/game/:id" component={ScrabbleScreen} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
