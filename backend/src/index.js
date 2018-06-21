import express from 'express'
import logger from 'morgan'
import router from './router'
import {initializeState} from './state'

const port = process.env.PORT
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)

app.listen(port, async () => {
  process.stdout.write('\x1Bc') // flush backend console
  await initializeState()
  console.log(`Backend running on port: ${port}`)
})

export default app
