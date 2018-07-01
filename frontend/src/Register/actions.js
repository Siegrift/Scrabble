import {passwordEqualSelector, registerSelector} from './state'
import {pick} from 'lodash'

const setMessage = (data) => ({
  type: 'Set register message',
  payload: data,
  path: ['register', 'message'],
  reducer: () => data,
})

export const signUp = () => async (dispatch, getState, {api}) => {
  const state = getState()
  if (!passwordEqualSelector(state)) {
    dispatch(setMessage({text: 'Passwords do not match', color: 'danger'}))
  } else {
    try {
      await api.register(pick(registerSelector(state), ['username', 'password']))
      dispatch(setMessage({text: 'Sign up successful! You can sign in', color: 'success'}))
    } catch (err) {
      dispatch(setMessage({text: err.message, color: 'danger'}))
    }
  }
}
