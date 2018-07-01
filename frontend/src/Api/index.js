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

  register(data) {
    return this.request('register', {
      method: POST,
      headers: JSON_HEADER,
      body: JSON.stringify(data),
    }).then((res) => res.text())
  }

  request(url, options) {
    this.logger.log(`Request: ${url}`, options)
    return fetch(url, options).then(async (response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        const errorMessage = await response.text()
        const error = new Error(`${errorMessage}`)
        error.response = response.statusText || response.status
        return Promise.reject(error)
      }
    })
  }
}

export default Api
