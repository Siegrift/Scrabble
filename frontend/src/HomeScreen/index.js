import React from 'react'
import {Button} from 'reactstrap'
import {connect} from 'react-redux'
import {createGame} from './actions'
import './HomeScreen.css'

const HomeScreen = ({createGame}) => (
  <div className="homeScreen">
    <Button onClick={createGame}>Začať hru</Button>
  </div>
)

export default connect(
  null,
  {createGame}
)(HomeScreen)
