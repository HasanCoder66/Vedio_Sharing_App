import  express  from "express";
import {register, login  } from '../controllers/authController.js'
// , , google
const authRouter = express.Router()

// MIDDLEWARES
authRouter.post('/register' , register)
authRouter.post('/login' , login)
// authRouter.post('/google' , google)


export default authRouter