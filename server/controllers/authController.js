import mongoose from "mongoose"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import User from '../models/userSchema.js'
import { createError } from "../error.js";




// register
// localhost:8000/auth/register
export const register = async (req, res, next) => {
    try {
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password : hash})

        await newUser.save()
        res.status(200).json('User signup successfully' )

    } catch (error) {
       next(error)
    }
}



// login
// localhost:8000/auth/register
export const login = async (req, res, next) => {
    try {
       const user = await User.findOne({name : req.body.name})
       if(!user) return next(createError(404, 'user not found sorry!'))

       const isCorrect = await bcryptjs.compare(req.body.password , user.password)
       if(!isCorrect) return next(createError(400, 'wrong Credientials!'))

       const {password, ...others} = user._doc  
       const token = jwt.sign({id : user._id  }, process.env.JWT)

       res.cookie("access_token", token,{
        httpOnly : true,
       }).status(200).json(others)

    } catch (error) {
       next(error)
    }
}



