import express from 'express'
import {user} from '../controllers/userController.js'
const userRouter = express.Router()

//  MIDDLEWARES 
userRouter.get('/user', user)




export default userRouter