import express, { NextFunction, Request, Response } from 'express'
import logger from '@app/logger'
import cors from "cors"

import { rootRouter } from './routes'

const app = express()

app.use(
  cors({
    origin: "*",
  })
)

app.get('/', (req, res) => {
  res.json({success: true})
})

app.use('/api', rootRouter)

function onError(err: any, req: Request, res:Response, next:NextFunction) {
  if (err) return res.status(500).json({
    error: true,
    message: err.message,
  });
  else return res.status(404).json({
    error: true,
    message: 'Not Found',
  })
}

app.use('/', onError);

const PORT = process.env.API_PORT || 5000

app.listen(PORT, () => {
  logger.info(`Example app listening on port ${PORT}`)
})
