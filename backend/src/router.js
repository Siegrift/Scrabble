import express from 'express'
import fs from 'fs'
import uuidGenerator from 'uuid/v1'
import {state} from './state'
import {WORDS_FILENAME} from './constants'

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
  const uuid = uuidGenerator()
  state.games[uuid] = {}
  res.send(uuid)
}

router.get('/', sampleRequest)
router.post('/word', addWord)
router.get('/words', getWords)
router.get('/create', createGame)

export default router
