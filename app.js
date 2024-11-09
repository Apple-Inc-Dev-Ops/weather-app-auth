import express from 'express'
import * as dotenv from 'dotenv'
import authRouter from './routes/auth_router.js'
import cors from 'cors'
import favoriteRouter from './routes/favorite_router.js'
import ErrorHandler from './middlewares/ErrorHandler.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(authRouter)
app.use(favoriteRouter)

app.use(ErrorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
