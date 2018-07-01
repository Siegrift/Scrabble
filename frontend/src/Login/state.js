import {set} from 'object-path-immutable'

const state = {
  username: '',
  password: '',
}

export const setInitialState = (appState) => set(appState, 'register', state)
