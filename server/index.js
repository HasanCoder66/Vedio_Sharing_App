import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/authRoute.js'
import userRouter from './routes/userRoute.js'
import commentRouter from './routes/commentRoute.js'
import videoRouter from './routes/videoRoute.js'
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
const port = 8000

// MIDDLEWARES
app.use(cookieParser())
app.use(express.json())
app.use('/auth', authRouter)
app.use('/api', userRouter)
app.use('/api', videoRouter)
app.use('/api', commentRouter)

app.use((err, req, res , next) => {
    const status = err.status || 500;
    const  message = err.message || 'something went wrong';
    return res.status(status).json({
        success : false,
        status ,
        message  
       })
})

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