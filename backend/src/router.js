import express from 'express'
import fs from 'fs'
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

router.get('/', sampleRequest)
router.post('/word', addWord)
router.get('/words', getWords)

export default router
