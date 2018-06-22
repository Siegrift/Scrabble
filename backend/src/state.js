import {WORDS_FILENAME} from './constants'
import {readFilePromise} from './utils'

export const state = {
  words: null,
  games: {},
}

// TODO this could be moved to database
export const initializeState = async () => {
  const rawData = await readFilePromise(WORDS_FILENAME)
  const splitted = rawData.toString().split('\n')
  splitted.pop() // last value is empty
  state.words = splitted
}
