import {set} from 'object-path-immutable'
import {get} from 'lodash'

export const forwardReducerTo = (reducer, path) => (state, payload) => {
  const newValue = reducer(get(state, path), payload)
  return set(state, path, newValue)
}
