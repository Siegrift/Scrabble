import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from './rootReducer'
import getInitialState from './state'
import Api from './Api'
import {history} from './history'

export default () => {
  const logger = {
    log: () => null,
  }
  const loggerMiddleware = createLogger({
    collapsed: true,
  })

  const middlewares = [thunk.withExtraArgument({logger, api: new Api(logger), history})]
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware)
  }

  const store = createStore(rootReducer, getInitialState(), applyMiddleware(...middlewares))

  if (process.env.NODE_ENV === 'development') {
    logger.log = (message, payload) =>
      store.dispatch({
        type: message,
        payload,
      })
  }

  return store
}
