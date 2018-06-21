import express from 'express'
import logger from 'morgan'
import router from './router'

const port = process.env.PORT
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
  process.stdout.write('\x1Bc') // flush backend console
  console.log(`Backend running on port: ${port}`)
})

export default app
