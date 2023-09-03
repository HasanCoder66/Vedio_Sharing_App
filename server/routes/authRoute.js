import  express  from "express";
import {register, login  } from '../controllers/authController.js'

// , , google


const authRouter = express.Router()


// MIDDLEWARES


// register
// localhost:8000/auth/register
authRouter.post('/register' ,  register)

// login
// localhost:8000/auth/login
authRouter.post('/login' , login)

// authRouter.post('/google' , google)


export default authRouter