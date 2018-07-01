import {forwardReducerTo} from './utils'
import getInitialState from './state'

const rootReducer = (state = getInitialState(), action) => {
  const {reducer, path, payload} = action
  // fallback for 3rd-party actions
  if (!reducer) return state
  return forwardReducerTo(reducer, path)(state, payload)
}

export default rootReducer
