import express from 'express'
import logger from 'morgan'
import router from './router'
import {initializeState} from './state'
import http from 'http'
import socketIo from 'socket.io'

const port = process.env.PORT
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)

const server = http.createServer(app)
const io = socketIo(server)
io.on('connection', (socket) => {
  console.log('user connected')
  socket.on('disconnect', () => console.log('user disconnected'))
})

server.listen(port, async () => {
  process.stdout.write('\x1Bc') // flush backend console
  await initializeState()
  console.log(`Backend running on port: ${port}`)
})

export default app
