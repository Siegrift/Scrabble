import {setInitialState as setRegisterState} from './Register/state'
import {setInitialState as setLoginState} from './Login/state'
import {compose} from 'redux'

export default () =>
  compose(
    setRegisterState,
    setLoginState
  )({})
