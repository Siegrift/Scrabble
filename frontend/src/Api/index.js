import io from 'socket.io-client'

const POST = 'POST'
const GET = 'GET'
const JSON_HEADER = new Headers({
  'Content-Type': 'application/json',
})

class Api {
  constructor(logger) {
    this.logger = logger
    this.socket = io.connect()
    this.socket.on('message', (msg) => console.log(msg))
  }

  createGame() {
    return this.request('/create').then((res) => res.text())
  }

  request(url, options) {
    this.logger.log(`Request: ${url}`, options)
    return fetch(url, options)
  }
}

export default Api
