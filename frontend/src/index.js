import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import getConfiguredStore from './configureStore'
import App from './App'

const store = getConfiguredStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
