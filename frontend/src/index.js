import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import getConfiguredStore from './configureStore'
import {Router} from 'react-router'
import App from './App'
import {history} from './history'
import 'bootstrap/dist/css/bootstrap.css'

const store = getConfiguredStore()
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
