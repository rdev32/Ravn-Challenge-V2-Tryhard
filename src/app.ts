import 'dotenv/config'
import express, { type Application } from 'express'
import { serve, setup } from 'swagger-ui-express'
import session from 'express-session'
import morgan from 'morgan'
import cors from 'cors'

import specs from './middlewares/swagger'
import conf from './middlewares/session'

import authRouter from './routes/auth.routes'
import anonRouter from './routes/anon.routes'
import clientRouter from './routes/client.routes'
import managerRouter from './routes/manager.routes'

const app: Application = express()

app.set('port', process.env.PORT || 5000)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session(conf))

app.use('/api/docs', serve, setup(specs))
app.use('/api', anonRouter)
app.use('/api', authRouter)
app.use('/api', clientRouter)
app.use('/api', managerRouter)

export default app