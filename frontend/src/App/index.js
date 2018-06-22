import React from 'react'
import {Route} from 'react-router-dom'
import Title from '../Title'
import HomeScreen from '../HomeScreen'
import ScrabbleScreen from '../ScrabbleScreen'
import './App.css'

const App = () => (
  <div>
    <Route path="/" component={Title} />
    <Route exact path="/" component={HomeScreen} />
    <Route path="/game/:id" component={ScrabbleScreen} />
  </div>
)

export default App
