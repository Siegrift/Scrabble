import React from 'react'
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler} from 'reactstrap'
import {withState} from 'recompose'
import {Link} from 'react-router-dom'
import './Title.css'

const Item = (to, name) => (
  <NavItem>
    <NavLink tag={Link} to={to}>
      {name}
    </NavLink>
  </NavItem>
)

const Title = ({isOpen, setOpen}) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Scrabble</NavbarBrand>
    <NavbarToggler onClick={() => setOpen(!isOpen)} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        {Item('', 'Home')}
        {Item('login', 'Login')}
        {Item('register', 'Sign up')}
      </Nav>
    </Collapse>
  </Navbar>
)

export default withState('isOpen', 'setOpen', false)(Title)
