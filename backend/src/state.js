import {WORDS_FILENAME} from './constants'
import {readFilePromise} from './utils'

export const state = {
  // TODO words could be moved to database
  words: null,
  games: {},
  users: {},
}

// called on every backend reload (even hot)
export const initializeState = async () => {
  const rawData = await readFilePromise(WORDS_FILENAME)
  const splitted = rawData.toString().split('\n')
  splitted.pop() // last value is empty
  state.words = splitted
}
