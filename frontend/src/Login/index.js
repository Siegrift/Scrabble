import React from 'react'
import {Container, Input, Button} from 'reactstrap'

const Login = () => (
  <Container style={{maxWidth: '350px'}}>
    <Input className="form-control" type="text" placeholder="Username" />
    <Input className="form-control" type="password" placeholder="Password" />
    <Button color="primary" style={{width: '100%'}}>
      Log in
    </Button>
  </Container>
)

export default Login
