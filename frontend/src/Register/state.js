import {set} from 'object-path-immutable'
import {createSelector} from 'reselect'

const initialState = {
  username: '',
  password: '',
  passwordRepeat: '',
  message: {
    text: null,
    color: null,
  },
}

export const registerSelector = (state) => state.register
export const usernameSelector = (state) => state.register.username
export const passwordSelector = (state) => state.register.password
export const passwordRepeatSelector = (state) => state.register.passwordRepeat
export const messageSelector = (state) => state.register.message
export const passwordEqualSelector = createSelector(
  passwordSelector,
  passwordRepeatSelector,
  (password, passwordRepeat) => password === passwordRepeat
)

export const setInitialState = (appState) => set(appState, 'register', initialState)
