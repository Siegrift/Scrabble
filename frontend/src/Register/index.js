import React from 'react'
import {Container, Input, Button, Alert} from 'reactstrap'
import {connect} from 'react-redux'
import {messageSelector, usernameSelector, passwordRepeatSelector, passwordSelector} from './state'
import {signUp} from './actions'
import {setValue} from '../sharedActions'

const Register = ({message, username, password, passwordRepeat, signUp, setValue}) => (
  <Container style={{maxWidth: '350px'}}>
    <Input
      className="form-control"
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setValue(['register', 'username'], e.target.value, 'Set username')}
    />
    <Input
      className="form-control"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setValue(['register', 'password'], e.target.value, 'Set password')}
    />
    <Input
      className="form-control"
      type="password"
      placeholder="Repeat password"
      value={passwordRepeat}
      onChange={(e) =>
        setValue(['register', 'passwordRepeat'], e.target.value, 'Set repeat password')
      }
    />
    <Button color="primary" style={{width: '100%'}} onClick={signUp}>
      Sign up
    </Button>
    {message.text && <Alert color={message.color}>{message.text}</Alert>}
  </Container>
)

export default connect(
  (state) => ({
    message: messageSelector(state),
    username: usernameSelector(state),
    password: passwordSelector(state),
    passwordRepeat: passwordRepeatSelector(state),
  }),
  {signUp, setValue}
)(Register)
