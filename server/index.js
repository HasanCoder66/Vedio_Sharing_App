import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import commentRouter from './routes/commentRoute.js'
import videoRouter from './routes/videoRoute.js'
import authRouter from './routes/authRoute.js'

dotenv.config()

const app = express()
const port = 8800

// MIDDLEWARES
app.use(express.json())
app.use('/auth', authRouter)
app.use('/api', userRouter)
app.use('/api', commentRouter)
app.use('/api', videoRouter)

const connect = () => {
    mongoose.connect(process.env.MONGO_URI )
    .then(()=> {
        console.log('Connect to DB')
    })
   .catch((err)=> {
    throw err
   })
}


app.listen( port , () => {
    connect()
    console.log(`server listen on port ${port}`)
})