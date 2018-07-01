import express from 'express'
import fs from 'fs'
import nextUuid from 'uuid/v1'
import {state} from './state'
import {WORDS_FILENAME, StatusCodes} from './constants'
import {find} from 'lodash'

const router = express.Router()

const sampleRequest = (req, res) => {
  res.json(['This is just a sample backend response'])
}

const addWord = (req, res) => {
  const {word} = req.query
  fs.appendFile(WORDS_FILENAME, `${word}\n`, (err) => {
    if (err) console.log(err)
  })
}

const getWords = (req, res) => {
  res.send(state.words)
}

const createGame = (req, res) => {
  const uuid = nextUuid()
  state.games[uuid] = {}
  res.send(uuid)
}

const register = (req, res) => {
  const {username, password} = req.body
  if (find(state.users, (user) => user.username === username)) {
    res.status(StatusCodes.BAD_REQUEST).send('Username already taken')
  } else {
    const uuid = nextUuid()
    state.users[uuid] = {username, password}
    res.status(StatusCodes.OK).send()
  }
}

router.get('/', sampleRequest)
router.post('/word', addWord)
router.get('/words', getWords)
router.get('/create', createGame)
router.post('/register', register)

export default router
