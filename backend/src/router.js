import express from 'express'
const router = express.Router()

const HttpStatusCodes = {
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
}

const sampleRequest = (req, res, next) => {
  res.json(['This is just a sample backend response'])
}

router.get('/', sampleRequest)

export default router
