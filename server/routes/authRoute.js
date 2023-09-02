import  express  from "express";
import {register , login , google} from '../controllers/authController.js'

const app = express()
const authRouter = express.Router()

// MIDDLEWARES
app.post('/register' , register)
app.post('/login' , login)
app.post('/google' , google)


export default authRouter